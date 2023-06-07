const editPost = () => {
    const btns = document.querySelectorAll('.editBtn');
    btns.forEach( (btn) => {
        btn.addEventListener(`click`, (e) => {
            const className = e.target.className;
            const splitOne = className.split(' ');
            const split = splitOne[1].split('_');
            const id = split[1];
            const input = document.querySelector(`.input_${id}`);
            const value = input.value;

            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                title: value,
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
            })
    })
}

const deletePost = () => {
    const btns = document.querySelectorAll('.deleteBtn');
    btns.forEach( (btn) => {
        btn.addEventListener(`click`, (e) => {
            const className = e.target.className;
            const splitOne = className.split(' ');
            const split = splitOne[1].split('_');
            const id = split[1];

            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });

            })
    })
}
   
   
   fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then( (data) => {
        let map = data.map( (e) => {
            return `
                <div class="container">
                    <input class="input_${e.id}" type="text" value=${e.title} />
                    <button class="editBtn btn_${e.id}">Edit</button>
                    <button class="deleteBtn dltbtn_${e.id}">Delete</button>
                </div>
            `;
    })
    
    
        map = map.join('');
        document.body.innerHTML = map;
        editPost();

    });




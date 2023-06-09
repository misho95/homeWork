

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('reg-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name');
        const surName = document.getElementById('surName');
        const email = document.getElementById('email');
        const user = {
            id : new Date().getTime(),
            name : name.value,
            surName: surName.value,
            email : email.value,
            status : false
        };

        let data = localStorage.getItem('users');

        if(data !== null){
            data = JSON.parse(data);
            data.push(user);
            localStorage.setItem('users', JSON.stringify(data));

        } else {
            localStorage.setItem('users', JSON.stringify([user]));
        }
      
        form.reset();
    })
})
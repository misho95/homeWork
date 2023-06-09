document.addEventListener('DOMContentLoaded', () => {

    const display = () => {
        const root = document.getElementById('root');
        const data = localStorage.getItem('users');
        const parseData = JSON.parse(data);

            if(data && parseData.length > 0){
                const parseData = JSON.parse(data);
                const map = parseData.map( (user) => {
                    return `
                        <div id="post_${user.id}" class="p-2 border-2 border-gray-300 flex flex-col gap-1 relative">
                            <button class="btn-delete absolute right-2 top-2">
                                <span class="material-symbols-outlined">
                                    person_remove
                                </span>
                            </button>
                            <div>${user.name}</div>
                            <div>${user.surName}</div>
                            <div>${user.email}</div>
                            <button class="btns ${user.status ? 'bg-red-400' : 'bg-green-400'}">${user.status ? 'Deactive' : 'Active'}</button>
                        </div>
                    `;
                })
                const joinMap = map.join('');
                root.innerHTML = joinMap;
            } else {
                console.log('no data')
                root.innerHTML = "No Users";
            }
    

            const btns = document.querySelectorAll('.btns');
            btns.forEach( (btn) => {
                btn.addEventListener(`click`, (e) => {
                    const parent = e.target.parentElement;
                    const getID = parent.getAttribute('id');
                    const split = getID.split('_');
                    const ID = split[1];
                    const data = localStorage.getItem('users');
                    const parseData = JSON.parse(data);
                        const filterd = parseData.map( (user) => {
                            if(user.id === +ID) { 
                                return { ...user, status : user.status ? false : true};
                            } else {
                                return user;
                            }
                        });
                    localStorage.setItem('users', JSON.stringify(filterd));
                    display();
                })
            })

            const btnDelete = document.querySelectorAll('.btn-delete');
            btnDelete.forEach( (btn) => {
                btn.addEventListener(`click`, (e) => {
                    const firstParent = e.target.parentElement;
                    const parent = firstParent.parentElement;
                    const getID = parent.getAttribute('id');
                    const split = getID.split('_');
                    const ID = split[1];
                    const data = localStorage.getItem('users');
                    const parseData = JSON.parse(data);
                    const filterd = parseData.filter( (user) => {
                        if(user.id !== +ID) { 
                            return user;
                        }
                    });
                localStorage.setItem('users', JSON.stringify(filterd));
                display();
                })
            })

        }

            display();

})
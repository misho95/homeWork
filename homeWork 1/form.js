( ()=> {

    const form = document.querySelector('#form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
            //select dom
            const userName = document.querySelector('#userName');
            const surName = document.querySelector('#surName');
            const age = document.querySelector('#age');
            const passWord = document.querySelector('#passWord');
            const rePassWord = document.querySelector('#rePassWord');
            const email = document.querySelector('#email');
            const employd = document.querySelector('input[name="employd"]:checked');


                if(passWord.value !== rePassWord.value){
                    alert("პაროლი არ ემთხვევა");
                    return;
                }
    
                if(userName.value.length > 50 || surName.value.length > 50){
                    alert("სახელი ან გვარი აღემატება 50ს");
                    return;
                }

                //get if employd
                    let emp;
                    const value = employd.getAttribute("id");
                    if(value === "yes"){
                        emp = "დასაქმებული";
                    } else {
                        emp = "უსაქმური";
                    }

    
                console.log("სახელი: ", userName.value);
                console.log("გვარი: ", surName.value);
                console.log("ასაკი: ", age.value);
                console.log("დასაქმების სტატუსი: ", emp);
                console.log("ემაილი: ",email.value);
           
            
    })



   














})();
let form = document.querySelector('button');

form.addEventListener('click',function(e){
    e.preventDefault();
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let number = document.querySelector('.number');
    let conPass = document.querySelector('.con-pass');
    
    let nameError = document.querySelector('.name-error');
    let emailError = document.querySelector('.email-error');
    let passError = document.querySelector('.pass-error');
    let conPassError = document.querySelector('.con-pass-error');
    let conPassError2 = document.querySelector('.con-pass-error-2');

    
    if(name.value === ''){
            name.classList.add('error');
            nameError.classList.add('textError');
            return false;
        }else{
            name.classList.remove('error');
            nameError.classList.remove('textError');
        }



        if(email.value === ''){
            email.classList.add('error');
            emailError.classList.add('textError');
            return false;
        }else{
            email.classList.remove('error');
            emailError.classList.remove('textError');
        }



        if(number.value === ''){
            number.classList.add('error');
            passError.classList.add('textError');
            return false;
        }else{
            number.classList.remove('error');
            passError.classList.remove('textError');
        }


        if(conPass.value != number.value){
            conPass.classList.add('error');
            conPassError2.classList.add('textError');
            return false;
        }
        if(conPass.value === number.value){
            alert('ok');
        }else{
            alert('not ok');
        }
        return true;

        
});
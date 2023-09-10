let form = document.querySelector('button');

form.addEventListener('click',function(e){
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
            e.preventDefault();
            name.classList.add('error');
            nameError.classList.add('textError');
            return false;
        }
        if(email.value === ''){
            e.preventDefault();
            email.classList.add('error');
            emailError.classList.add('textError');
            return false;
        }
        if(number.value === ''){
            e.preventDefault();
            number.classList.add('error');
            passError.classList.add('textError');
            return false;
        }
        if(conPassError.value != number.value){
            e.preventDefault();
            number.classList.add('error');
            conPassError2.classList.add('textError');
            return false;
        }
        return true;
});
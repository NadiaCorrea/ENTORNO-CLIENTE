const inputName = document.querySelector('#name');
const inputLastName = document.querySelector('#lastName');
const inputEmail = document.querySelector('#email');
const inputAge = document.querySelector('#age');
const inputSex = document.querySelectorAll('[type="radio"]');
const inputTerms = document.querySelector("#terms");
const form = document.querySelector("#form2")

form.addEventListener('input', function (e) {
    console.log(e.target.id);
    switch (e.target.id) {
        case 'name':
            console.log("nombre");
            validateName();
            break;
        case 'lastName':
            console.log("apellido");
            validateLastName();
            break;
        case 'email':
            console.log("email");
            validateEmail();
            break;
        case 'age':
            console.log("age");
            validateAge();
            break;
        case 'radio':
            console.log("sex");
            validateSex();
            break;
        case 'terms':
            console.log("term");
            validateTerms();
            break;
    }
});

form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    //validate fields 
    let isNameValid =  validateName(),
        isLastNameValid = validateLastName(),
        isEmailValid = validateEmail(),
        isAgeValid = validateAge(),
        isSexChecked = validateSex(),
        isTermsChecked = validateTerms();

        let isFormValid = isNameValid && isLastNameValid && isEmailValid && isAgeValid && isSexChecked && isTermsChecked;

        // if all are valid submit form
        if (isFormValid) {
            e.submit();
        }
});

function isRequired(value){
    if(value === ''){
        return false;
    }else{
        return true;
    }
}

function isBetween (length, min, max){
    if (length < min || length > max){
       return false; 
    } else{
        return true;
    }    
} 

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

function validateName() {
    let valid = false;
    const min = 3,
          max = 20;
        console.log(inputName);
    const name = inputName.value.trim();
    if (!isRequired(name)) {
        showError(inputName, 'El nombre no se puede dejar en blanco.');
    } else if (!isBetween(name.length, min, max)) {
        showError(inputName, `El nombre debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(inputName);
        valid = true;
    }
    return valid;
};

function validateLastName(){
    let valid = false;
    const min = 3,
          max = 30;
    const lastName = inputLastName.value.trim();
    if (!isRequired(lastName)) {
        showError(inputLastName, 'Los apellidos no se pueden dejar en blanco.');
    } else if (!isBetween(lastName.length, min, max)) {
        showError(inputLastName, `Los apellidos deben tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(inputLastName);
        valid = true;
    }
    return valid;
}
  

const checkEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


const validateEmail = () => {
    console.log("email");
    let valid = false;
    console.log(inputEmail);
    const email = inputEmail.value.trim();
    console.log(email);
    if (!isRequired(email)) {
        showError(inputEmail, 'El Email no se puede dejar en blanco.');
    } else if (!checkEmail(email)) {
        showError(inputEmail, 'El Email no es válido.')
    } else {
        showSuccess(inputEmail);
        valid = true;
    }
    return valid;
}

function validateAge(){
    let valid = false;
    const min = 18,
          max = 150;
    const age = inputAge.value.trim();
    if (!isRequired(age)) {
        showError(inputAge, 'La edad no se puede dejar en blanco.');
    } else if (age < min || age > max) {
        showError(inputAge, `La edad debe estar comprendida entre ${min} y ${max} años.`)
    } else {
        showSuccess(inputAge);
        valid = true;
    }
    return valid;
}

const isCheckedRadio = radios => {
    let valid=false;
    for (let i=0;i<radios.length;i++) {
        if (radios[i].checked){
            valid = true;  
        }
    }
    return valid;
}

function validateSex(){
    let valid = isCheckedRadio(inputSex);
    if(!valid){
        showError(inputSex[0], 'Debes elegir una opción.');
    } else {
        showSuccess(inputSex[0]);    
    }
    return valid;
}

const isCheckedCheckbox = checkbox => checkbox.checked;

function validateTerms(){
    let valid = isCheckedCheckbox(inputTerms);
    if(!valid){
        showError(inputTerms, 'Debes aceptar los terminos y condiciones.');
    } else{
        showSuccess(inputTerms);
    }
}

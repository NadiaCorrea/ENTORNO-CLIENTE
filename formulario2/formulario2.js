const inputName = document.querySelector('#name');
const inputLastName = document.querySelector('#nlastName"');
const inputDob = document.querySelector("dateOfBirth");
const inputEmail = document.querySelector('#email');
const inputAge = document.querySelector('#age');
const inputSex = document.querySelectorAll('#radio');

const isRequired = value => {
    if(value==='') return false;
    else return true;
}

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const checkname = () => {
    let valid = false;
    const min = 3,
          max = 15;

    const name = inputName.value.trim();

    if (!isRequired(name)) {
        showError(name, 'El nombre no se puede dejar en blanco.');
    } else if (!isBetween(name.length, min, max)) {
        showError(name, `El nombre debe tener entre ${min} y ${max} caracteres.`)
    } else {
        showSuccess(name);
        valid = true;
    }
    return valid;
};


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const checkSex = () => {
    let valid = isCheckedRadio(inputSex);
    if (!valid) showError(inputSex[0], 'Debes elegir una opción.');
    else showSuccess(inputSex[0]);
    return valid;
}
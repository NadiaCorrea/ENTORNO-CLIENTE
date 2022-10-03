let formName = document.querySelector("#name");
formName.addEventListener('input', validateName);

function validateName(Event){
    Event.preventDefault();

    if(formName.validity.tooShort){
        formName.setCustomValidity("¡Se esperaba un nombre de un mínimo de tres caracteres!");
    } else {
        formName.setCustomValidity("");
      }
}

let formAge = document.getElementById('age');
formAge.addEventListener('input', validateAge);

function validateAge(Event){
    Event.preventDefault();
    if(formAge.validity.rangeUnderflow){
        formAge.setCustomValidity("No se permite el registro a menores de 18 años.");
    }else if( formAge.validity.rangeOverflow){
        formAge.setCustomValidity("La edad no puede superar los 99 años.");
    }else {
        formAge.setCustomValidity("");
      }
}

const email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
  } else {
    email.setCustomValidity("");
  }
});
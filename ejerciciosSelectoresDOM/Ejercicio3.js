/*
A partir del fichero Ejercicio3.html se pide realizar mediante javascript las siguientes cuestiones:
*/

//Pon tu nombre al atributo value del campo first name
let firstName = document.querySelector("[name = firstname]");
firstName.setAttribute("value","Nadia");

//Pon el valor a la pregunta Favorite Day of Week a Monday
let favDayValue = document.querySelector("select :last-child");
favDayValue.setAttribute("selected", true);

//Cambia la etiqueta de First name a 'Tu nombre'
let labelfirstName = document.getElementsByName("first_name_label");
labelfirstName[0].outerText = "Tu nombre: ";
console.log(labelfirstName);

//Obtén el valor del atributo 'name' del campo Favorite Day of The Week

let favDay = document.querySelector("[selected = true]");
console.log(favDay.value);

//Escoge la opción Female de la pregunta de género.

let male = document.querySelector("[value = male]");
let female = document.querySelector("[value = female]");
male.removeAttribute("checked");
female.setAttribute("checked", true);

console.log(male);
console.log(female);

//Encuentra la primera form del documento y pon el atributo name = personal_info
let firstForm = document.querySelector("form");
firstForm.setAttribute("name","personal_info");


//Encuentra la segunda form del documento y pon el atributo name = job_info
let secondForm = document.querySelector("form:nth-of-type(2)");
secondForm.setAttribute("name","job_info");


//Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 
//'Entrevista de trabajo' respectivamente

let firstTitulo = document.createElement("h1");
let titulo1 = document.createTextNode("Entrevista personal");
firstTitulo.appendChild(titulo1);
firstForm.insertAdjacentElement('afterbegin',firstTitulo);

let secondTitulo = document.createElement("h1");
let titulo2 = document.createTextNode("Entrevista de trabajo");
secondTitulo.appendChild(titulo2);
secondForm.insertAdjacentElement('afterbegin',secondTitulo);

//Agrega un título a la pregunta Male/Female 'Gender'

let gender = document.createElement("h1");
let text = document.createTextNode("Gender");
let option = document.querySelector("[type=radio]");

gender.appendChild(text);
option.insertAdjacentElement("beforebegin", gender);

//Agrega una pregunta Email: con un input de tipo texto despuÃ©s de last name

let newLabel = document.createElement("label");
let email = document.createTextNode("Email: ");
let salto1 = document.createElement("br");
let salto2 = document.createElement("br");
let salto3 = document.createElement("br");
newLabel.appendChild(email);

let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("name", "email");

firstForm.insertBefore(input,gender);
firstForm.insertAdjacentElement("beforeend", newLabel);
firstForm.insertBefore(salto1, gender);
firstForm.insertBefore(newLabel,input);
firstForm.insertBefore(salto3,input);

//Agrega la clase form a ambos formularios

firstForm.setAttribute("class","form");
secondForm.setAttribute("class","form");

console.log(firstForm);
console.log(secondForm);
/*
A partir del fichero Ejercicio3.html se pide realizar mediante javascript las siguientes cuestiones:
    - Pon tu nombre al atributo value del campo first name
    - Pon el valor a la pregunta Favorite Day of Week a Monday
    - Cambia la etiqueta de First name a 'Tu nombre'
    - ObtÃ©n el valor del atributo 'name' del campo Favorite Day of The Week
    - Escoge la opciÃ³n Female de la pregunta de gÃ©nero.
    - Encuentra la primera form del documento y pon el atributo name = personal_info
    - Encuentra la primera form del documento y pon el atributo name = job_info
    - Agrega un tÃ­tulo h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
    - Agrega un tÃ­tulo a la pregunta Male/Female 'Gender'
    - Agrega una pregunta Email: con un input de tipo texto despuÃ©s de last name
    - Agrega la clase form a ambos formularios
*/

let firstName = document.getElementsByName("firstname");
firstName.value = "Nadia";
console.log(firstName);

let favDay = document.getElementsByName("fav_day");
favDay.value = "Monday";
console.log(favDay);

let labelfirstName = document.getElementsByName("first_name_label");
labelfirstName.innerText = "Tu nombre: ";
console.log(labelfirstName);

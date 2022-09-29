const days =["lunes", "martes", "miércoles", "jueves", "viernes", "sabado", "domingo"];
const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto","septiembre","octubre","noviembre", "diciembre"];


/*
1. Un campo que nos permite seleccionar la fecha y hora y la muestra a continuación. 
La salida deberá tener elsiguiente formato:
Hoy es martes, 28 de Febrero de 2018 y son las 14:32 horas.
*/


let fecha = document.querySelector("input[type='datetime-local']");

fecha.addEventListener('input', selectDate);

function selectDate(){
    let today = new Date(fecha.value);
    let dayName = today.getDay(); //Devuelve valores 0-6
    let dayNumber = today.getDate(); //Devuelve valores 1-31
    let month = today.getMonth(); //Devuelve valores 0-11
    let year = today.getFullYear();//devuelve el año 4 dígitos
    let hour = today.getHours(); //Retorna la hora (0–23) 
    let minutes = today.getMinutes(); //Retorna los minutos (0–59) 
    console.log(`Hoy es ${days[dayName-1]}, ${dayNumber} de ${months[month-1]} de ${year} y son las ${hour}:${minutes} horas.`);
}

/*
2. A continuación dos campos para introducir un mes y un año e imprima su calendario. 
No hace falta esmerarse en la presentación del calendario, 
el calendario simplificado puede ser del tipo:
OCTUBRE – 2014
1 (miercoles), 2 (jueves), ….. , 31 (viernes).
*/

let monthInput = document.getElementById("monthInput");
let yearInput = document.getElementById("yearInput");
let sendInfo = document.getElementById("showCalendar");

sendInfo.addEventListener('click', showCalendar);

function showCalendar(Event){
    Event.preventDefault();

    let requestedDate = new Date(monthInput.value, yearInput.value);

    // requestedDate.setMonth(monthInput.value);
    // requestedDate.setFullYear(yearInput.value);
    // requestedDate.setDate(0);

    console.log(requestedDate);

}


/*
3. Un campo que nos permita introducir una fecha y otro que nos permita introducir los días de retraso en el pago, 
una ves introducidos nos devolverá la fecha del pago.
*/

/*
4. Un cronómetro con el siguiente formato:
Hoy es 30-9-2019 y son las 21:4:23 horas.
*/

/*
5. Una alarma que mostrará la hora actual y nos permite indicar la hora a la que sonará, cuando llegue a la hora, pregunta si se quiere posponer o detener, si se pospone "sonará" a los 2 minutos. EXTRA: haz que suene un sonido además de mostrar el mensaje.
*/
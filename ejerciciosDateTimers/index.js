const days =["domingo","lunes", "martes", "miércoles", "jueves", "viernes", "sabado"];
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
    console.log(`Hoy es ${days[dayName]}, ${dayNumber} de ${months[month-1]} de ${year} y son las ${hour}:${minutes} horas.`);
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
    let inputDate = new Date(yearInput.value,monthInput.value, 0);
    let numberOfDates = inputDate.getDate();

    for (let i= 1; i <= numberOfDates; i++){
        let iDay = new Date(yearInput.value,monthInput.value, i);
        let iDate = iDay.getDay();

        let newLine = document.createElement("p");
        let outPutDiv = document.querySelector("#outPut2");
        newLine.textContent = `${i} (${days[iDate]})`;    
        outPutDiv.appendChild(newLine);
    }
    // console.log(numberOfDates)
    // console.log( inputDate.toDateString().substring(0,4));
    // console.log(inputDate.getDay());

}

/*
3. Un campo que nos permita introducir una fecha y otro que nos permita introducir 
los días de retraso en el pago, 
una ves introducidos nos devolverá la fecha del pago.
*/
let inputDate = document.getElementById("inputDate");
let delayDays = document.getElementById("delayDays");

let requestPayment = document.getElementById("requestPayment");

requestPayment.addEventListener('click', showPayment);

function showPayment(Event){
    Event.preventDefault();
    let startDate = new Date(inputDate.value);
    let paymentDate = new Date();
    paymentDate.setDate(startDate.getDate() + parseInt(delayDays.value));

    let newLine = document.createElement("p");
    let outPutDiv = document.querySelector("#outPut3");
    newLine.textContent = `${paymentDate.toLocaleDateString()}`;    
    outPutDiv.appendChild(newLine);
}

/*
4. Un cronómetro con el siguiente formato:
Hoy es 30-9-2019 y son las 21:4:23 horas.
*/

let chrono = setInterval(showChrono, 1000);
let stop = document.getElementById("stopChrono");

stop.addEventListener('click', stopInterval);

function showChrono(){
    let localDate = new Date();
    let currentDay = localDate.getDate();
    let currentMonth = localDate.getMonth() + 1;
    let currentYear = localDate.getFullYear();
    let currentHour = localDate.getHours();
    let currentMinutes = localDate.getMinutes(); 
    let currentSeconds= localDate.getSeconds();

    let currentDate = currentDay + "-" + currentMonth + "-" + currentYear;
    let currentTime = currentHour + ":" + currentMinutes + ":" + currentSeconds

    let outPutDiv = document.querySelector("#outPut4");
    outPutDiv.innerHTML = `Hoy es ${currentDate} y son las ${currentTime} horas.`;
    // console.log(`Hoy es ${currentDate} y son las ${currentTime} horas.`);
}

function stopInterval(Event){
    Event.preventDefault();
    clearInterval(chrono);
}

/*
5. Una alarma que mostrará la hora actual y nos permite indicar la hora a la que sonará, 
cuando llegue a la hora, pregunta si se quiere posponer o detener, 
si se pospone "sonará" a los 2 minutos. 
EXTRA: haz que suene un sonido además de mostrar el mensaje.
*/

let localDate2 = new Date();
// localDate2.toTimeString();
// console.log(localDate2.toTimeString());
let currHour = localDate2.getHours();
if (currHour < 10) {
    currHour = "0" + currHour;
}
let currMinutes = localDate2.getMinutes();
if (currMinutes < 10) {
    currMinutes = "0" + currMinutes;
}
let currTime = currHour + ":" + currMinutes

let divAlarm = document.getElementById("alarm");
divAlarm.innerHTML = `Hora actual: ${currTime}`;

let alarma = document.querySelector("#alarmOn");
alarma.addEventListener('input', setAlarm );

let alarmaId;

function setAlarm(Event){
    Event.preventDefault();
    alarmaId = setInterval(checkAlarm, 1000, alarma.value);
}
const audio = new Audio("https://www.soundjay.com/clock/alarm-clock-01.mp3");

function checkAlarm(value) {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    if (currentHour < 10) {
        currentHour = "0" + currentHour;
    }
    let currentMinute = currentDate.getMinutes();
    if (currentMinute < 10) {
        currentMinute = "0" + currentMinute;
    }
    let alarmTime = currentHour +":" +currentMinute; 
    if (alarmTime === value && currentDate.getSeconds() == 0) {
        audio.play();
        addOptions();
    }
}

function addOptions(){
    let postButton = document.getElementById("postpone");
    let stopButton = document.getElementById("stop");
    stopButton.style.display = "block";
    postButton.style.display = "block";    
}

let postButton = document.getElementById("postpone");
let stopButton = document.getElementById("stop");
postButton.addEventListener('click', alarmPostponed);
stopButton.addEventListener('click', stopAlarm);

function alarmPostponed(Event){
    Event.preventDefault();
    clearInterval(alarmaId);
    let newHour = parseInt(alarma.value.substring(0,2));
    let newMinutes = parseInt(alarma.value.substring(3));
    newMinutes = newMinutes + 2;
    if (newMinutes >=60){
        newHour = newHour + 1;
        newMinutes = newMinutes - 60;
    }
    if (newHour >= 24){
        newHour = newHour - 24;
    }

    let hourValue = newHour.toString();
    let minuteValue = newMinutes.toString();
   
    if (hourValue < 10) {
        hourValue = "0" + hourValue;
    }
    if (minuteValue < 10) {
        minuteValue = "0" + minuteValue;
    }
    let alarmvalue2 = hourValue +":" + minuteValue; 
    
    alarmaId = setInterval(checkAlarm, 1000, `${alarmvalue2}`);
    audio.pause();
    audio.currentTime = 0;
}

function stopAlarm(Event){
    Event.preventDefault();
    clearInterval(alarmaId);
    audio.pause();
    audio.currentTime = 0;
}
/*A partir del fichero Ejercicio4.html se pide realizar mediante javascritp las siguientes 
 cuestiones utilizando selectores CSS.    */

//1 - Selecciona todos los elementos de tipo h2 y pon el texto de color rojo.

let headings = document.querySelectorAll("h2");
for(let i = 0; i < headings.length; i ++){
   headings[i].style.color="red";
}

//2 - Modifica el precio del vuelo para que ahora sea $199.99

let price = document.querySelectorAll(".details");
for (let i= 0; i < price.length; i ++){
   price[i].innerText = "$199.99";
}

//3 - Modifica todos los títulos de las vacaciones (h2), su nuevo valor será "Sanlúcar de Barrameda".

for (i=0; i < headings.length; i ++){
   headings[i].innerText = "Sanlúcar de Barrameda";

}

// 4 - Selecciona la lista de vacaciones cuyo id es #vacations.

let list = document.querySelectorAll("#vacations");
console.log(list);

//5 - Selecciona aquellos ítems que tenga la clase .america

let items = document.querySelectorAll(".america");
console.log(items);

/*
A partir del fichero Ejercicio5.html se pide realizar mediante js 
las siguientes cuestiones utilizando selectores CSS, 
una vez seleccionados modifica alguna propiedad CSS.    
*/

//a - Selecciona todos los módulos de primero
let modulosPri = document.querySelector( "p + ul");
console.log(modulosPri);

//b - Selecciona el módulo Sistemas Informáticos
let sistemas = document.querySelector("[href= 'SImod.html']");
console.log(sistemas);

//c - Selecciona el módulo que va detrás de Sistemas Informáticos
let nextModulo = document.querySelector("ul li:nth-of-type(4)");
//let nextModulo1 = modulosPri.querySelector("li:nth-of-type(4)");
console.log(nextModulo);

//d - Selecciona los módulos que van detrás de Sistemas Informáticos
let modulos = modulosPri.querySelectorAll("li:nth-of-type(1n+4)");
console.log(modulos);

//e - Selecciona los módulos que tengan el atributo href
let modHref = document.querySelectorAll("[href]");
console.log(modHref);

//f - Selecciona los módulos que no tengan el atributo href
let sinHref = document.querySelectorAll("a:not([href])");
console.log(sinHref);

//g - Selecciona aquellos módulos que contengan la cadena 'mod'
let cadMod = document.querySelectorAll('[href*= "mod"]');
console.log(cadMod);

//h - Selecciona aquellos módulos que empiecen por la cadena 'mod'
let startMod = document.querySelectorAll('[href^= "mod"]');
console.log(startMod);

//i - Selecciona aquellos módulos que terminen con la cadena '.html'
let endHtml = document.querySelectorAll("[href$='.html']");
console.log(endHtml);

//j - Selecciona todas las horas de los módulos de segundo
let horas = document.querySelectorAll("li>ul li:last-child") 
console.log(horas);

//k - Selecciona los ítems vacíos y añade el contenido 'Nodo vacío'
let emptyItems = document.querySelectorAll("li:empty");
for(let i=0; i < emptyItems.length; i ++){
    emptyItems[i].textContent = "Nodo vacío";
}
console.log(emptyItems);

//l - Selecciona los módulos DWESE, DAW y EIE

let modName = document.querySelectorAll("ul>li>ul");
let parents = [];
let requestedMod = [];

for(let i=0; i < modName.length; i++){
    parents.push(modName[i].parentElement);
}
for(let j=0; j < parents.length ; j = j +2){
    requestedMod.push(parents[j].firstChild);    
}

console.log(modName);
console.log(parents);
console.log(requestedMod);

//ul>li>ul   ul>li




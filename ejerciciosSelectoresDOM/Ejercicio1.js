/*A partir de la página web proporcionada (Ejercicio1.html) 
y utilizando las funciones DOM y querySelector o querySelectorAll, 
mostrar por pantalla la siguiente información:

    Número de enlaces de la página
    Dirección a la que enlaza el penúltimo enlace
    Numero de enlaces que enlazan a http://prueba
    Número de enlaces del tercer párrafo
*/

let links = document.querySelectorAll("a");
document.write(`Número de enlaces de la página: ${links.length} <br>`);

let nextLastLink = document.querySelector("p:last-of-type a:nth-last-Child(2)");
document.write(`Dirección a la que enlaza el penúltimo enlace: ${nextLastLink} <br>`);

let pruebaLink = document.querySelectorAll("[href='http://prueba']");
document.write(`Número de enlaces que enlazan a http://prueba: ${pruebaLink.length} <br>`);

let lastParrLinks = document.querySelectorAll("p:nth-child(3) a");
document.write(`Número de enlaces del tercer párrafo: ${lastParrLinks.length} <br>`); 




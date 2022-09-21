/*A partir de la página web proporcionada (Ejercicio1.html) 
y utilizando las funciones DOM y querySelector o querySelectorAll, 
mostrar por pantalla la siguiente información:

    Número de enlaces de la página
    Dirección a la que enlaza el penúltimo enlace
    Numero de enlaces que enlazan a http://prueba
    Número de enlaces del tercer párrafo
*/

let links = document.querySelectorAll("a");
document.write(`Número de enlaces de la página: ${links.length}`);

let nextLastLink = links[5];
document.write(`Dirección a la que enlaza el penúltimo enlace: ${nextLas}`)

console.log(nextLastLink)


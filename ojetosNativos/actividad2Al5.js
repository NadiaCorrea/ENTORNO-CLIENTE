//actividad2
/*Crea un documento html que contenga algún formulario, imágenes, anclas y enlaces y 
    comprueba el contenido de 
    los arrays que contienen información sobre dichos elementos en el objeto document.
*/

document.title = "Actividades";
let modificacion = document.lastModified;
console.log(`Ùltima fecha de modificación: ${modificacion}`);

let enlaces = document.links;
console.log("Array de Enlaces: ");
console.log(enlaces);
let imagenes = document.images;
console.log("Array de imágenes:")
console.log(imagenes); 
console.log(`Número de imagenes existentes: ${imagenes.length}`);

let formularios = document.forms;
console.log("Array de formularios:");
console.log(formularios);
console.log(`Número de formularios existentes: ${formularios.length}`);

//actividad3

/*Realiza un ejemplo donde obtengas toda la información posible del objeto location 
de forma ordenada. Utiliza los métodos del objeto location para modificar la url, 
comprobando la diferencia entre assign y replace, 
haz uso también del método reload.*/

console.log(location.host);
console.log(location.href);
console.log(location.pathname);
console.log(location.port);
console.log(location.protocol);
console.log(location.search);


var url = document.createElement('a');
url.href = 'https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container';
console.log(url.href);      
console.log(url.protocol);  
console.log(url.host);      
console.log(url.hostname);  
console.log(url.port);      
console.log(url.pathname);  
console.log(url.search);    
console.log(url.hash);      
console.log(url.origin); 

/*
location.replace() reemplaza el recurso actual por el recibido como URL. 
La diferencia con el metodo assign() es que luego de usar replace() la pagina actual 
no va a ser guardada en la sesión History, 
esto significa que el usuario no podrá usar el boton Atras para navegar a esta.
*/

//location.assign("www.google.com");
// location.reload(true);
// location.replace("www.google.com");
   

/*Actividad 4: A partir de la página proporcionada en las transparencias 
https://developer.mozilla.org/es/docs/Web/API/Navigator 
indica y prueba algunos métodos útiles del objeto navigator.*/

console.log(navigator.credentials);
console.log(navigator.cookieEnabled);
console.log(navigator.getUserMedia);
console.log(navigator.sendBeacon);
console.log(navigator.vendor);

/*
Actividad 5: Revisa la documentación del objeto screen 
https://developer.mozilla.org/es/docs/Web/API/Screen 
y busca al menos 3 ejemplos útiles que puedas realizar con este objeto.
*/

console.log(screen.availHeight);
console.log(screen.availWidth);
console.log(screen.width);
console.log(screen.colorDepth);




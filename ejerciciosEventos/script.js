let box = document.getElementById('box');
let tecla = document. getElementById('textIn');
let botonEnviar = document.getElementById('formButton'); 

box.addEventListener('mouseenter', colorChangeIn);
box.addEventListener('mouseleave', colorChangeOut);
box.addEventListener('mousedown', leftClick);
box.addEventListener('mouseup', leftUnclick);

tecla.addEventListener('keydown', Event => {keyPush(tecla)});
tecla.addEventListener('keyup', Event => {keyUnpush(tecla)});



//Cuando	el	ratón	entre	dentro	de	la	caja,	se	cambiará	el	color	a	verde.
function colorChangeIn(){
    box.style.background = 'green';
}

//Cuando	el	ratón	salga	de	la	caja	el	color	deberá	cambiar	a	rojo.
function colorChangeOut(){
    box.style.background = 'red';
}

//Cuando	pulsemos	el	botón	izquierdo	del	ratón	estando	situados	sobre	la	caja,	
//aparecerá	por	consola	el	mensaje	“Has	pulsado	la	caja.

function leftClick(){
    console.log("Has	pulsado	la	caja.");
}

//Al	soltar	el	botón	izquierdo	del	ratón	en	la	caja,	aparecerá	por	consola	el	mensaje	
//”Has	soltado	el	botón	izquierdo	dentro	de	la	caja”.

function leftUnclick(){
    console.log("Has soltado el	botón izquierdo	dentro de la caja");
}

function keyPush(tecla){
    console.log(`Has pulsado la tecla ${tecla.value}`);
}

function keyUnpush(tecla){
    console.log(`Has soltado la tecla ${tecla.value}`);
}

botonEnviar.addEventListener('click', consolePrint);

function consolePrint(event){
    event.preventDefault();
    let texto = document.getElementById("formIn");
    console.log(texto.value);
}

//botonEnviar.addEventListener('click', consolePrint2);

// function consolePrint2(event){
//     event.preventDefault();
//     let texto = document.getElementById("formIn");
//     texto.oninput = function(){
//         console.log(texto.value);
//     }
// }

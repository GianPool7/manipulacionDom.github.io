
let cabeza=document.querySelector('header');
let titulo_cabeza=document.createElement('h1');
titulo_cabeza.innerHTML='<center>Mi pagina de manipulacion del DOOM</center>';
cabeza.appendChild(titulo_cabeza);

let contenedor_circulo=document.querySelector('div');
let texto=document.createElement('h2');
texto.innerHTML='Haz click para cambiar el estilo.';
contenedor_circulo.appendChild(texto);


let btns=document.querySelector('button');
let txt=document.createElement('span');
txt.innerHTML='<center>Cambiar Estilo</center>';
btns.appendChild(txt);

let ppagina=document.querySelector('footer');
let textopp=document.createElement('span');
textopp.innerHTML='<center>©2024 Manipulación del DOM-Todos los derechos reservados</center>';
ppagina.appendChild(textopp);


const colores= ['red', 'blue', 'green','yellow'];

function cambiar() {
    const colorAletorio = colores[Math.floor(Math.random() * colores.length)];
    
    contenedor_circulo.style.backgroundColor = colorAletorio;
}
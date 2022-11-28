var foto = 0;
var carruselM = {};
var total = 0;

//arreglo para cargar las imagenes con su respectivo titulo
carruselM = [{CargarImg:"mesa1.jpg", titulo:"Mesa estilo Rio"}, {CargarImg:"mesa2.jpg", titulo:"Mesa con relleno de flores"}, 
{CargarImg: "mesa3.jpg", titulo: "Mesa con estampado 3D"}, {CargarImg: "mesa4.webp", titulo: "Mesa con relleno de objetos"}];
//las imagenes deben estar dentro de la misma carpeta que el js

var cambiar= function(mas){ //funcion que cambia la imagen de adelante a atras

total = carruselM.length; //almacena la cantidad total de imagenes, mientras mas cargue mas almacenara
foto = foto + mas;

if (foto > total){
    foto = 1;
}
if(foto < 1){
    foto = total;
}
document.thumb.src = carruselM[foto-1].CargarImg;
titulo = document.getElementById('titulo');
titulo.innerText = carruselM[foto-1].titulo;
}
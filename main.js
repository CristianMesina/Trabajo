//Registro
let seleccionar = document.querySelector('#tipo');
let parrafo1 = document.querySelector('p');
let material2 = document.getElementById('material'); //crea una variable y toma lo que 
let Cantidad1 = document.getElementById('cantidad');

seleccionar.addEventListener('change', indicar);

function indicar(){
    let eleccion = seleccionar.value;
    material2.innerHTML = ' ';
    parrafo1.textContent = ' ';

    if(eleccion === 'piso'){
        parrafo1.textContent = 'Muy bien, ahora por favor';
        material2.innerHTML = 'Sobre que tipo de superficie se trabajara:';
        Cantidad1.innerHTML = 'Indique la cantidad de m2:';
    }else if(eleccion === 'mesa'){
        parrafo1.textContent = 'Muy bien, ahora por favor';
        material2.innerHTML = 'Sobre que tipo de superficie se trabajara:';
        Cantidad1.innerHTML = 'Indique la cantidad de m3:';
    }else if(eleccion=== 'lampara'){
        parrafo1.textContent = 'Muy bien, ahora por favor';
        material2.innerHTML = 'Sobre que tipo de superficie se trabajara:';
        Cantidad1.innerHTML = 'Indique la cantidad de m3:';
    }else{
        parrafo1.textContent = 'Seleccione antes de continuar';
        material2.innerHTML = 'Superficie';
        Cantidad1.innerHTML = 'Cantidad';
    }
}


//Reloj digital registro

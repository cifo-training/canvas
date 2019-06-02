let canvas = document.getElementById('canvas');/*traerse el elemento del DOM*/
let context = canvas.getContext('2d');/*2d*/

/*redimensionar canvas:tambien valdria ponerlo sin window*/
canvas.width = window.innerWidth;/*ancho ventana*/
canvas.height = window.innerHeight;/*alto ventana*/

//canvas.style.backgroundColor='black';
let posX=40;/*posicion inicial X*/
let posY=200;/*posicion inicial Y*/
let radio=35;/*radio de la bola*/

function pintarCirculo(x,y,radio){/*funcion pintarCirculo*/
    /*context.beginPath();inicializar linea*/
    context.fillStyle='darkgreen';/*color relleno*/
    context.beginPath();/*inicializar linea*/
    context.arc(x,y,radio,0,2*Math.PI,false);/*arco:circulo:x,y,radio,*/
    context.fill();/*rellena*/
    context.stroke();/*pinta_lineas*/
    
}

function inicializaCanvas(){/*Inicializacion del canvas*/
    context.clearRect(0,0,canvas.width,canvas.height);/*limpiar canvas*/
    context.fillStyle='black';//le doy color de fondo
    context.fillRect(0,0,canvas.width,canvas.height);//lo relleno de color fondo
}

function random(){
    return Math.floor(Math.random());
}

let z=4;//acelerador

function animacionCirculo(){
        
    inicializaCanvas();/*sin esto no draw canvas y sale el rastro*/
    pintarCirculo(posX,posY,radio);
    if(posX>innerWidth-radio || posX<radio) {  z=-z;  }
    
    posX+=z;
    requestAnimationFrame(animacionCirculo);//llamada recusiva
       
}

//pintarCirculo(200);///pintarCirculo(300);
animacionCirculo();
let canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

/*redimensionar canvas*/
canvas.width = window.innerWidth;/*ancho ventana*/
canvas.height = window.innerHeight;/*alto ventana*/

/*vamos a pintar las figuras basicas*/
/*Rectangulo*/
context.fillRect(200, 200, 100, 100);/*rectangulo*/
//context.clearRect(0,0,canvas.width,canvas.height);/*borrarlo*/
//context.clearRect(225, 225, 50, 50);

context.fillStyle='yellow';/*darle color relleno*/

/*Triangulo*/
context.fillRect(300,300,300,150);/*rectangulo:x,y,ancho,alto*/

/*Triangulo:con line*/
context.beginPath();/*iniciar:objeto de tipo linea*/
context.moveTo(600, 390);
context.lineTo(650, 450);
context.lineTo(650, 340);
//context.lineTo(700, 500);
context.strokeStyle='blue';/*color linea*/
context.fill();/*rellena*/
context.stroke();/*pinta linea*/

/*circulo1*/
context.beginPath();/*inicializar linea*/
context.arc(350,225,75,0,2*Math.PI,false);/*arco:circulo:x,y,radio,*/
context.fill();/*rellena*/
context.stroke();/*pinta_lineas*/
/*circulo2*/
context.beginPath();/*inicializar linea*/
context.arc(500,250,50,0,2*Math.PI,false);/*arco:circulo:x,y,radio,*/
context.fill();/*rellena*/
context.stroke();/*pinta_lineas*/
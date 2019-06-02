let canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

/*redimensionar canvas*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*vamos a pintar las figuras basicas*/
context.fillRect(200, 200, 100, 100);/*rectangulo*/

context.clearRect(225, 225, 50, 50);

context.fillStyle='regba(255,0,0,.5)';/*color relleno*/

//context.clearRect(0,0,canvas.width,canvas.height);

context.fillStyle='rgba(0,255,0,.5)';
context.fillRect(100,100,100,100);

context.fillStyle='rgba(0,255,0,.5)';
context.fillRect(300,100,100,100);

context.strokeRect(100, 300, 100, 100);/*lineas*/
context.clearRect(0,0,canvas.width,canvas.height);

context.beginPath();/*iniciar:objeto de tipo linea*/
context.moveTo(100, 500);

context.lineTo(400, 500);
context.lineTo(200, 100);
context.lineTo(100, 500);

/*context.context.lineTo(400, 500);*/
context.strokeStyle='blue';/*color*/
context.fill();/*rellena*/
context.stroke();/*pinta linea*/

context.beginPath();
context.lineTo(100,200);

/*context.beginPath();/*inicializar linea*/
context.arc(100,200,50,0,2*Math.PI,false);/*arco*/
context.fill();/*rellena*/
context.stroke();/*pinta*/
let canvas=document.getElementById('canvas');
let context=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

context.fillStyle='#ff9400';//color fondo cuadrado
context.fillRect(200,35,150,150);//Dibuixa un quadrat al centre del canvas 
context.clearRect(225, 225, 50, 50); //suprimeix un espai del dibuix que hi hagi

context.fillStyle='#FEFFE5';

context.beginPath();
context.arc(235, 150, 100, Math.PI/180 * 360, Math.PI/180  * 270, true);
context.lineTo(235, 65);
context.arc(235, 150, 80, Math.PI/180 * 270, Math.PI/180  * 360, false);
context.lineTo(335, 150);

context.fill();
//context.stroke();
context.beginPath();
context.arc(235, 150, 65, Math.PI/180 * 360, Math.PI/180  * 270, true);
context.lineTo(235, 45);
context.arc(235, 150, 45, Math.PI/180 * 270, Math.PI/180  * 360, false);
context.lineTo(335, 150);
context.fill();

context.beginPath();
context.arc(250, 135, 15, Math.PI/180 * 0, Math.PI/180  * 360, true);


context.fill();
let canvas=document.getElementById('mycanvas');
let context=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

context.fillRect(200,200,100,100);//Dibuixa un quadrat al centre del canvas 
context.clearRect(225, 225, 50, 50); //suprimeix un espai del dibuix que hi hagi
//context.clearRect(0,0,canvas.width, canvas.height)//esborra tot el contingut del canvas

context.strokeStyle='#f9ff00';
context.fillRect(0,0,canvas.width,canvas.height);
context.fillStyle='#f9ff00';
context.fillRect(200,200,200,150);

context.beginPath();//iniciem el dibuixador de linea
context.moveTo(475, 220);//posicionen
context.lineTo(400, 275);
context.lineTo(475, 325);
context.fill();


context.beginPath();
context.arc(235, 150, 50, Math.PI / 180 * 0, Math.PI / 180 * 360, false);
context.fill();

context.beginPath();
context.arc(345, 165, 35, Math.PI / 180 * 0, Math.PI / 180 * 360, false);

context.fill();//context.stroke();

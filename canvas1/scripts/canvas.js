let canvas=document.getElementById('canvas');
let context=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

context.fillRect(200,200,100,100);//Dibuixa un quadrat al centre del canvas 
context.clearRect(225, 225, 50, 50); //suprimeix un espai del dibuix que hi hagi
//context.clearRect(0,0,canvas.width, canvas.height)//esborra tot el contingut del canvas

context.fillStyle='rgba(0,255,0,.5';
context.fillRect(100,100,100,100);
context.fillStyle='rgba(0,0,255,.5';
context.fillRect(300,100,100,100);
context.fillStyle='rgba(255,0,0,.5';
context.fillRect(300,300,100,100);
context.fillStyle='rgba(255,0,0,.5';
context.strokeRect(100,300,100,100);//quadre buit

context.clearRect(0,0,canvas.width, canvas.height)//esborrem tot

context.beginPath();//iniciem el dibuixador de linea
context.moveTo(100, 500);//posicionen
context.lineTo(400, 500);
context.lineTo(200, 100);
context.lineTo(100, 500);

context.strokeStyle='blue';
context.fill();

context.stroke();

context.beginPath();
context.arc(100, 200, 50, Math.PI / 180 * 0, Math.PI / 180 * 360, false);
context.fillStyle='rgba(0,20,255,.5';

context.fill();
context.stroke();

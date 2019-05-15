let canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fondo
context.fillRect(0,0,canvas.width,canvas.height);
context.beginPath();

// Arcos
context.strokeStyle = 'rgb(255,255,0)';

context.arc(300, 300, 200, (Math.PI / 180) * 270, 0, false);
context.lineTo(500, 300);
context.arc(300, 300, 170, 0, (Math.PI / 180) * 270, true);
context.lineTo(300, 100);

context.moveTo(300, 200);
context.arc(300, 300, 130, (Math.PI / 180) * 270, 0, false);
context.lineTo(400, 300);
context.arc(300, 300, 100, 0, (Math.PI / 180) * 270, true);

// Circulo;

context.moveTo(350, 275);
context.arc(325, 275, 25, 0, 2*Math.PI, false);
context.fillStyle='rgb(255,255,0)';
context.fill();

context.stroke();

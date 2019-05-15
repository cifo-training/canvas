let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//context.clearRect(0,0,canvas.width, canvas.height)//esborra tot el contingut del canvas

//context.stroke();
let x=200,y=200;
let inc=10,incY=10;
let ballColor='darkgreen'
function pintarCercle() {
    context.clearRect(0,0,canvas.width, canvas.height)
    context.beginPath();
    
    context.fillStyle = ballColor;
    context.arc(x, y, 30, Math.PI / 180 * 0, Math.PI / 180 * 360, false);
    context.fill();
    x+=inc;
    y+=incY;
    if (x>=canvas.width-30) {inc=-inc;  ballColor='blue'}
    else if (x<=30) {inc=-inc;
    ballColor='red';}
    if (y>=canvas.height-30) {incY=-incY; ballColor='darkgreen'}
    else if (y<=30) {incY=-incY;  ballColor='yellow'}
    requestAnimationFrame(pintarCercle);
}

pintarCercle(x);
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(300,250,60,0,360);
ctx.stroke();
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    mouseX=e.clientX-canvas.offsetLeft
    mouseY=e.clientY-canvas.offsetTop
circle(mouseX,mouseY)
}
function circle(mouseX,mouseY){
    ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(mouseX,mouseY,60,0,360);
ctx.stroke();
}
function erase(){
    ctx.clearRect(0,0,600,500)
}
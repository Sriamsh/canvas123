canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var last_x,last_y;
color="lightblue";
width=6;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

       ctx.arc(currentx,currenty,40,0,2*Math.PI);
        ctx.stroke();
    }
    last_x=currentx;
    last_y=currenty
}
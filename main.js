var last_position_of_x,last_position_of_y;
var color="black";
var width_of_line=1;
var new_width=screen.width-50;
var new_height=screen.height-50;
var width=screen.width;
if(width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    
    console.log("touchstart");
}


canvas.addEventListener("touchmove",myTouchMove);
function myTouchMove(e){
  
   console.log("touchmove");
  current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
  current_position_of_touch_Y=e.touches[0].clientY-canvas.offsetTop;
  
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=width_of_line;
      ctx.moveTo(last_position_of_x, last_position_of_y);   
      ctx.lineTo(current_position_of_touch_x, current_position_of_touch_Y);
      ctx.stroke();
  last_position_of_x=current_position_of_touch_x;
  last_position_of_y=current_position_of_touch_Y;
}

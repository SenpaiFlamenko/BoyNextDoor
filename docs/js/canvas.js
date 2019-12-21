var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
function boynextdoor(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    clickX = [];
    clickY = [];
    clickDrag = [];
    clickColor = [];
    clickSize = [];
}
function redraw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

    context.lineJoin = "round";
    context.lineWidth = 5;
    context.strokeStyle = "#000";

    for(var i=0; i < clickX.length; i++) {		
      context.beginPath();
      if(clickDrag[i] && i){
        context.moveTo(clickX[i-1], clickY[i-1]);
       }else{
         context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.strokeStyle = clickColor[i];
       context.lineWidth = clickSize[i];
       console.log(clickSize.length)
       context.stroke();
    }
  }

//Colors

var curColor;
var colors = ["#000", "#e3b129", "#65a8a3" , "#00f5e3", "#adadad", "#002aff"];
var clickColor = new Array();
var colorButtons = $(".drawing-color");
$.each(colorButtons, function(i){
  $(this).click(() =>{
    curColor = colors[i];
  })
})

//Sizes
var curSize;
var curSizes = [5, 10, 20];
var clickSize = new Array();
var sizeButtons = $(".size");
$.each(sizeButtons, function(i){
  $(this).click(() =>{
    curSize = curSizes[i];
  })
})


//Other magic
function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(curColor);
  clickSize.push(curSize);
}
var canvasDiv = document.getElementById('drawing');
canvas = document.createElement('canvas');
canvas.setAttribute('width', '1350');
canvas.setAttribute('height', '800');
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");

$('#canvas').mousedown(function(e){
          
    paint = true;
    addClick(e.pageX - this.offsetLeft - 56, e.pageY - this.offsetTop - 240);
    redraw();
  });

  $('#canvas').mousemove(function(e){
    if(paint){
      addClick(e.pageX - this.offsetLeft - 56, e.pageY - this.offsetTop - 240, true);
      redraw();
    }
  });

  $('#canvas').mouseup(function(e){
    paint = false;
  });
  
  $('#canvas').mouseleave(function(e){
    paint = false;
  });
  
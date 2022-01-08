let keys = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
};

let canvas = document.getElementById ("canvasForDrawing");
let canvasContext = canvas.getContext ("2d");
let colorV2 = "blue"
let x, y, lastX, lastY;

canvas.addEventListener ("mousedown", drawingWithTheMouseListener);

function drawingWithTheMouseListener (event) {
    //console.log (event)
    canvas.addEventListener ("mousemove", DrawingWithTheMouse)
    lastX = event.layerX
    lastY = event.layerY
}
function DrawingWithTheMouse (event) {
  x = event.layerX;
  y = event.layerY;
  drawingLine (colorV2, lastX, lastY, x, y, canvasContext);
  lastX = event.layerX;
  lastY = event.layerY;
}
function drawingLine (colorV2, xInicial, yInicial, xFinal, yFinal, canvasContextV2){
    canvasContextV2.strokeStyle = colorV2 ;
    canvasContextV2.lineWidth = 3;
    canvasContextV2.beginPath ();
    canvasContextV2.moveTo (xInicial, yInicial);
    canvasContextV2.lineTo (xFinal, yFinal);
    canvasContextV2.stroke ();
    canvasContextV2.closePath ();
}

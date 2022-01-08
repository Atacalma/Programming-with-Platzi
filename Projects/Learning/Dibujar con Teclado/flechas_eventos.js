let keys = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
};

document.addEventListener ("keydown", drawingWithTheKeyboard);

let canvas = document.getElementById ("canvasForDrawing");
let canvasContext = canvas.getContext ("2d");
let colorV2 = "blue"
let movement = 10
let x = 20;
let y = 100;
dibujarLinea ("red", x-1, y-1, x + 1, y + 1 , canvasContext)

function dibujarLinea (colorV2, xInicial, yInicial, xFinal, yFinal, canvasContextV2){
    canvasContextV2.strokeStyle = colorV2 ;
    canvasContextV2.lineWidth = 3;
    canvasContextV2.beginPath ();
    canvasContextV2.moveTo (xInicial, yInicial);
    canvasContextV2.lineTo (xFinal, yFinal);
    canvasContextV2.stroke ();
    canvasContextV2.closePath ();

    RememberLastMovementMade (xFinal, yFinal)
}
function RememberLastMovementMade (xFinal, yFinal) { 
    x = xFinal
    y = yFinal
}
function drawingWithTheKeyboard (event) {
        switch (event.keyCode){
            case keys.UP:
                dibujarLinea (colorV2, x, y, x, y - movement, canvasContext)
            break;
            case keys.DOWN:
                dibujarLinea (colorV2, x, y, x, y + movement, canvasContext)
            break;
            case keys.RIGHT:
                dibujarLinea (colorV2, x, y, x + movement, y, canvasContext)
            break;
            case keys.LEFT:
                dibujarLinea (colorV2, x, y, x - movement, y, canvasContext)
            break;
            default:
                console.log ("otra tecla")
        }
};
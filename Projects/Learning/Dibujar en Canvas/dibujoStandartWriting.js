let texto = document.getElementById ("texto_lineas");
let boton = document.getElementById ("botoncito");
let d = document.getElementById ("dibujito");
let lienzo = d.getContext ("2d");

boton.addEventListener ("click", dibujoPorClick);

function dibujarLinea (color, xInicial, yInicial, xFinal, yFinal){
        lienzo.strokeStyle = color ;
        lienzo.beginPath ();
        lienzo.moveTo (xInicial, yInicial);
        lienzo.lineTo (xFinal, yFinal);
        lienzo.stroke ();
        lienzo.closePath ();
}
function dibujoPorClick(){
        let lineas = 30;
        let l = 0;
        let yInicial2,xInicial2, xFinal2, yFinal2 ;
    
        while (l < lineas){
            yInicial2 = l * 10
            xFinal2 = (l + 1) * 10
            dibujarLinea ("black", 0, yInicial2, xFinal2, 300);
            dibujarLinea ("yellow", 200, 123, 20, 40);
            l++;
            console.log (l);
        }

        for (l= 30/parseFloat(texto.value), k = l ; l < lineas; l = l + k){
            console.log (l);
            xInicial2 = l * 10;
            yFinal2 = (l + 1) * 10;
            dibujarLinea ("pink", xInicial2, 0, 300, yFinal2);
        }
        parseInt(texto.value);
}
const CANVASVILLAPLATZI = document.getElementById ("villaPlatzi")
const CONTEXTOFCANVASVILLAPLATZI = CANVASVILLAPLATZI.getContext ("2d")



let background = {
        loadOK:false
};
background.object = new Image ();
background.object.src = "img/tile.webp";
background.object.addEventListener ("load", loadbackground)
function loadbackground () {
        background.loadOK = true;
        draw();
}

let cow = {
        loadOK:false
};
cow.object = new Image ();
cow.object.src = "img/vaca.webp";
cow.object.addEventListener ("load", loadcow)
function loadcow () {
        cow.loadOK = true;
        draw();
}

let pig = {
    loadOK:false
};
pig.object = new Image ();
pig.object.src = "img/cerdo.webp";
pig.object.addEventListener ("load", loadpig)
function loadpig () {
        pig.loadOK = true;
        draw();
}

let chicken = {
    loadOK:false
};
chicken.object = new Image ();
chicken.object.src = "img/pollo.webp";
chicken.object.addEventListener ("load", loadchicken)
function loadchicken () {
        chicken.loadOK = true;
        draw();
}

let keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

let movementX = 0
let movementY = 0 
document.addEventListener ("keydown", drawingWithTheKeyboard);

function drawingWithTheKeyboard (event) {
    switch (event.keyCode){
        case keys.UP:
            movementY = movementY-5
            loadchicken ()
        break;
        case keys.DOWN:
            movementY = movementY+5
            loadchicken ()
        break;
        case keys.RIGHT:
            movementX = movementX+5
            loadchicken ()
        break;
        case keys.LEFT:
            movementX = movementX-5
            loadchicken ()
        break;
    }
};
function draw () {
        if (background.loadOK) {
        CONTEXTOFCANVASVILLAPLATZI.drawImage (background.object, 0, 0);
        }
            if (cow.loadOK) {
                for (i=0; i<=10;i++){
                    let x = aleatorio(0,5); //document.write(z);
                    let y = aleatorio(0,5); //document.write(z);
                    CONTEXTOFCANVASVILLAPLATZI.drawImage (cow.object, x*80, y*80);
                }
            }   
            if (pig.loadOK) {
                for (i=0; i<=10;i++){

                    CONTEXTOFCANVASVILLAPLATZI.drawImage (pig.object, x, y);
                    
                }
            } 
            if (chicken.loadOK) {
                let x = 250+movementX;
                let y = 250+movementY; //document.write(z);
                CONTEXTOFCANVASVILLAPLATZI.drawImage (chicken.object, x, y);
            }           
}
let x = aleatorio(0,420); //document.write(z);
let y = aleatorio(0,420); //document.write(z);


function aleatorio (min, max){
         let resultado;
         resultado = Math.floor (Math.random()* (max - min)) + min;
         return resultado;
}




/*  var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
} */

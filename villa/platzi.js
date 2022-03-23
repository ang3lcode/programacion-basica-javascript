// para hacer uso del canvas
var vp = document.getElementById('villaPlatzi');
var papel = vp.getContext("2d");

//para cargar y hacer uso de la villa como fondo
var fondo ={url: "ima/tile.png", cargaOK: false};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

// para cargar los animales
var vaca ={url: "ima/vaca.png", cargaOK: false};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);
var pollo ={url: "ima/pollo.png", cargaOK: false};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
var cerdo ={url: "ima/cerdo.png", cargaOK: false};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarPollo() {
  pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo() {
  cerdo.cargaOK = true;
    dibujar();
}
function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVaca() {
  vaca.cargaOK = true;
    dibujar();
}



function dibujar() {
var cantidad = aleatorio (0, 5);

  if (fondo.cargaOK == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK == true) {
    for (var i = 0; i < cantidad; i++) {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(vaca.imagen, x ,y);
    }
  }

  if (pollo.cargaOK == true) {
    for (var i = 0; i < cantidad; i++) {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if (cerdo.cargaOK == true) {
    for (var i = 0; i < cantidad; i++) {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
    papel.drawImage(cerdo.imagen, x, y);
  }
  }
}

function aleatorio(min, max) {
var resultado;
resultado  = Math.floor(Math.random() *(max - min + 1)) + min;
return resultado;
}

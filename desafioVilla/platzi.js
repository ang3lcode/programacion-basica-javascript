// para hacer uso del canvas
var vp = document.getElementById('villaPlatzi');
var papel = vp.getContext("2d");
document.addEventListener("keydown",moverCerdo);// flechas del teclado.
//para cargar y hacer uso de la villa como fondo
var fondo ={url: "ima/tile.png", cargaOK: false};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
// para cargar los animales
var cerdo ={url: "ima/cerdo.png", cargaOK: false};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
//posicion del cerdo
var xCerdo = 250;
var yCerdo = 250;
// tecla
var teclas = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };
//carga de las imagene
function cargarCerdo() {
  cerdo.cargaOK = true;
    dibujar();
}
function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
//para mover el cerdo
function moverCerdo(evento) {
  var movimiento = 64;
para casos, tambien puede er con if, y mas facil
  switch (evento.keyCode) {
    case teclas.UP:
    yCerdo = yCerdo - movimiento;
    dibujar(xCerdo, yCerdo);
      break;
    case teclas.DOWN:
    yCerdo = yCerdo + movimiento;
    dibujar(xCerdo, yCerdo);
      break;
    case teclas.LEFT:
    xCerdo = xCerdo - movimiento;
    dibujar(xCerdo, yCerdo);
      break;
    case teclas.RIGHT:
    xCerdo = xCerdo + movimiento;
    dibujar(xCerdo, yCerdo);
      break;
    default:
    console.log("otra tecla");
    break;
  }
}
// para colocar las imagenes
function dibujar() {
  if (fondo.cargaOK == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (cerdo.cargaOK == true) {
    papel.drawImage(cerdo.imagen, xCerdo, yCerdo);
  }
  }

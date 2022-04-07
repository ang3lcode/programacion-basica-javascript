var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

document.addEventListener("keydown",dibujarTeclado);
var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.lineWidth = 3;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}

function dibujarTeclado(evento) {
  var colorcito = "blue";
  var movimiento = 10;


  // esta es una opcion,que si funciona pero se puede hacer muy complejo,
  // por eso hay una opcion que son los casos, con: switch (expression)
  if (evento.keyCode == teclas.UP) {
    dibujarLinea("blue", x, y, x, y - movimiento, papel);
    y = y - movimiento;
  }
  if (evento.keyCode == teclas.DOWN) {
    dibujarLinea("blue", x, y, x, y + movimiento, papel);
    y = y + movimiento;
  }
  if (evento.keyCode == teclas.LEFT) {
    dibujarLinea("blue", x, y, x - movimiento, y, papel);
    x = x - movimiento;
  }
  if (evento.keyCode == teclas.RIGHT) {
    dibujarLinea("blue", x, y, x + movimiento, y, papel);
    x = x + movimiento;
  }
 // el swith es un comparador no funciona para mas
// switch (evento.keyCode) {
//   case teclas.UP:
//   console.log("arriba");
//     break;
//   case teclas.DOWN:
//   console.log("abajo");
//     break;
//   case teclas.LEFT:
//   console.log("izquierda");
//     break;
//   case teclas.RIGHT:
//   console.log("derecha");
//     break;
//   default:
//   console.log("otra tecla");
//   break;
// }
}

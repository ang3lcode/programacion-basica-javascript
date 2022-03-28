var texto = document.getElementById("txt_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);


var d = document.getElementById("dibujo");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujoPorClick() {
  var linea = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var espacio = ancho / linea;

  for (l = 0; l < linea; l++) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 1, yi, xf, 300);
    dibujarLinea(colorcito, yi ,1, 300, xf);
  }
  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
  }

  dibujarLinea("blue", 1, 1, 299, 1);
  dibujarLinea("blue", 1, 1, 1, 299);
  dibujarLinea("blue", 299, 1, 299, 299);
  dibujarLinea("blue", 299, 299, 1, 299);

}

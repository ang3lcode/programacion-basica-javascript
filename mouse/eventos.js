var boton = document.getElementById("botoncito"); // boton para hacer la primera function
boton.addEventListener("click",dibujoPorClick);

var color = document.getElementById("selecionar_color"); // para el color de la linea

var d = document.getElementById("area_de_dibujo");// donde se dibuja
var lienzo = d.getContext("2d");

document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

var click= 0;          // estado del click
var x;                      // guardar coordenada en X
var y;                      // guardar coordenada en Y



  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
  }

  // Funcion para mousemove
  function dibujarMouse(evento){
      if (click == 1) {   // solo se dibujara si esta el click del mouse presionado
      dibujarLinea("color", x, y , evento.layerX , evento.layerY, lienzo);
    }
    x = evento.layerX;
    y = evento.layerY;
  }

  // Funcion para mousedown
  function presionarMouse(evento){
    click = 1;         //click presionado
    x = evento.layerX;
    y = evento.layerY;
  }

    // Funcion para mouseup
  function soltarMouse(evento){
    click = 0;         // click suelto
    x = evento.layerX;
    y = evento.layerY;
  }

  function dibujoPorClick() {
    dibujarLinea("color", 1, 1, 299, 1);
    dibujarLinea("color", 1, 1, 1, 299);
    dibujarLinea("color", 299, 1, 299, 299);
    dibujarLinea("color", 299, 299, 1, 299);
  }

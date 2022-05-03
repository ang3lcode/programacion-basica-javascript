//variables
var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById('resultado');
//                boton de html
var b = document.getElementById('extraer');
b.addEventListener("click", entregarDinero);
//                clase de billetes
class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
  }
}
function entregarDinero() {
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
// codigo principal
  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero/bi.valor );
      if (div > bi.cantidad) {
        papeles = bi.cantidad
      }
      else {
        papeles = div;
      }
      for (var i = 0; i < papeles; i++)  {
        dibujar.push (new Billete(bi.valor, 1) );
      }
      entregado.push (new Billete(bi.valor, papeles));
      dinero -= bi.valor*papeles;
    }
  }
  if (dinero > 0) {
    resultado.innerHTML = "soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  }
  else {
    for (var e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML += "<img src=" + e.imagen.src + " />" + "<br/>" + e.cantidad + " billetes de $" + e.valor + "<br/>";
      }
    }
  }
}
// array de las imagenes
var imagenes = [];
imagenes["100"] = "100.jpg";
imagenes["50"] = "cincuenta.jpg";
imagenes["20"] = "veinte.jpg";
imagenes["10"] = "diez.jpg";
imagenes["5"] = "cinco.jpg";
console.log(imagenes);
// array de la caja
var caja = [];
 caja.push(new Billete(100, 5) );
 caja.push(new Billete(50, 10) );
 caja.push(new Billete(20, 30) );
 caja.push(new Billete(10, 10) );
 caja.push(new Billete(5, 10) );
// arrat de dinero que se entregado
var entregado = [];
var dibujar = [];

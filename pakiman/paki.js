var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";
console.log(imagenes);

class pakiman {
  constructor(n, v, a) {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<br /><strong>" + this.nombre + "</strong><br/ >");
    document.write("vida: " + this.vida + "<br/>");
    document.write("ataque: " + this.ataque + "<hr/ >");
  }
}

// var cauchin = new pakiman("cauchin", 100, 30);
// var pokacho = new pakiman("pokacho", 80, 50);
// var tocinauro = new pakiman("tocinauro", 120, 40);
// console.log(cauchin, pokacho, tocinauro);


var coleccion = [];
coleccion.push(new pakiman("pokacho", 80, 50));
coleccion.push(new pakiman("cauchin", 100, 30));
coleccion.push(new pakiman("tocinauro", 120, 40));

console.log(coleccion);

for(var p of coleccion){
  // p es cualquie cosa que yo quiero
  // de ves de in puero porner of (in es para el indice y of para la instancia )
    p.mostrar();

}
for (var x in coleccion[0]) {
  console.log(x);
}
// pokacho.mostrar();
// cauchin.mostrar();
// tocinauro.mostrar();

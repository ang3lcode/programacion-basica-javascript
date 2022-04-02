// cambie express por un nombre distinto para ver mejor el codigo
const cafecito = require('express');// requireno existe en la web pero si en los servidores
const app = cafecito();
// app.get es como una direccion que se va a abrir "/" es el home
app.get('/', inicio);
app.get('/cursos', cursos);

function inicio (peticio, resultado) {
  resultado.send('este es el home');
}

function cursos(peticion, resultado) {
  resultado.send('estos son los cursos');
}
app.listen(8989);

const express = require('express')
const app = express()
var hbs = require('hbs');
require('dotenv').config();
const port = process.env.PORT;

//handdlebars
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

/*
ejecutando un middleware de express
para servir contenido estatico
la siguiente instruccion envia al front el index del public
ademas express busca el archivo index.html como primera opcion a mostrar
*/
app.use( express.static('public') )


app.get('/', function (req, res) {
  //indicamos que al llamar al endpoint '/' se renderizara home
    res.render('home', {
      nombre: 'Milton Galindo',
      titulo: 'Curso de node'
    });

  });


app.get('/generic', function (req, res) {
  //se esta enviando a mostrar al front el archivo
  res.render('generic', {
    nombre: 'Milton Galindo',
    titulo: 'Curso de node'
  });
  });

app.get('/elements', function (req, res) {
  //se esta enviando a mostrar al front el archivo
  res.render('elements', {
    nombre: 'Milton Galindo',
    titulo: 'Curso de node'
  });
  });

app.get('/hola-mundo', function (req, res) {
  //se esta enviando a mostrar SOLO UN MENSAJE
    res.send('Hello yall');
  });

app.get('*', function (req, res) {
    //se esta enviando a mostrar al front el archivo
    //404 de public
    res.sendFile(__dirname + '/public/404.html');
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })
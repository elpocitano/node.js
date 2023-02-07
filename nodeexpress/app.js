var express = require('express'); //importamos o requerimos la libreria

var app = express(); //importamos el constructor de objetos de express

// peticion al metodo get del objeto app de la clase express
app.get('/', function(peticion, respuesta) {
    respuesta.send('Ruta INICIO')
});

app.get('/contacto', function(peticion, respuesta) {
    respuesta.send(contacto.html)
});

// llamada al metodo listen del objeto app, clase de express
app.listen(3000, function(peticion, respuesta) {
    console.log("Con express escuchando puerto 3000!!");
})
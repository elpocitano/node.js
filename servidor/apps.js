var http = require('http');
var servidor = http.createServer(function(peticion, respuesta) {
    respuesta.writeHead(200, {
        'Content-type': 'text/html;charset=utf-8'
    });
    respuesta.write('<h3>Server web básico con NODE.JS</H3');
    console.log('peticion web incoming');
    respuesta.end();
});
servidor.listen(3000);
console.log('Ejecutando un server local con node js');
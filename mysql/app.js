// nodejs con mysql

// mkdir folder, npm init.... -
//   npm i mysql //install mysql
// app.js //touch app.js punto de entrada

// importar librerias y asignarles un puntero para usar sus metodos

var mysql = require('mysql');

//crear conexion
var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'usuario_db',
    user: 'root',
    password: ''
});


conexion.connect(function(error) {
    if (error) {
        throw error;
    } else {
        console.log("CONEXION EXITOSA!!!")
    }
});

conexion.end();
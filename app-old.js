const http = require('http');


//Con http createServer creamos un servidor
http.createServer((request, response) => {
    /**
     * Request: son las peticiones que se realizan a nuetro servidor
     * Response: es la respuesta q nuestro servido retorna
     */

    // response.writeHead(200, { 'Content-Type': 'application/json' });
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // response.writeHead(200, { 'Content-Type': 'application/csv' });

    // response.write('id, nombre');//Escribimos en el servidor
    // response.write('1, Juan\n');//Escribimos en el servidor
    // response.write('2, Maria\n');//Escribimos en el servidor
    
    response.write('Hola Mundo')
    response.end();//Le indicamos al servidor q finalizamos

})
.listen( 8080 );//Indicamos que el servidor escuche en el puerto 8080

console.log('Escuchando en el puerto 8080');
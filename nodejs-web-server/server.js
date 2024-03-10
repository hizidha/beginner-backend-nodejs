/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @-param request: objek yang berisikan informasi terkait permintaan
 * @-param response: objek yang digunakan untuk menanggapi permintaan
 */

const http = require('http');
const requestListener = (request, response) => {
    // const method = request.method;
    // const { method } = request;

    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const { method } = request;
    if(method === 'GET') {
        // response ketika GET
        response.end('<h1>Halo HTTP Server ini GET!</h1>');
    }
 
    if(method === 'POST') {
        // response ketika POST
        response.end('<h1>Halo POST Data ini.</h1>');
    }
};
 
const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});
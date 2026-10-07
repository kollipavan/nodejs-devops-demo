const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello DevOps Swapnesh's team here. testing now. Thank you!');
});

server.listen(3000, () => {
    console.log('Running on port 3000');
});

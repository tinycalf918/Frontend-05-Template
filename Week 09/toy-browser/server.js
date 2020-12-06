const http = require('http');

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) =>{
        console.error(err);
    }).on('data', (chunk) => {
        body.push(chunk.toString());
    }).on('end', () => {
        // body = Buffer.concat(body).toString();
        console.log("111body:", body);
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('<html madd="add"><head><style>p{font-size:14px}img.my-img{width:20px}</style></head><body><h1>toybrowser</h1><p>哈哈</p><img/></body></html>');
        // response.end('h  h');
    });
}).listen(8088);

console.log("server started");
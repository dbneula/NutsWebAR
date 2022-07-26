// const tls = require('tls')
// const https = require('live-server-https');
 
// const server = tls.createServer(https, (socket) => {
//   console.log('server connected',
//               socket.authorized ? 'authorized' : 'unauthorized');
//   socket.write('welcome!\n');
//   socket.setEncoding('utf8');
//   socket.pipe(socket);
// });

// server.listen(8000, () => {
//   console.log('server bound');
// });



const http = require('http');
const fs = require('fs');


const app = http.createServer(function(request, response){
    
    let _url = request.url;
    
    if(_url === '/'){
        response.writeHead(200);
        return response.end(fs.readFileSync(__dirname + '/index.html'));
    }else{
        response.writeHead(200);
        return response.end(fs.readFileSync(__dirname + _url));
    }
}


);


app.listen(3000);

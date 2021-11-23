const fs = require('fs');
const http = require('http');
const port = process.env.port || 3000;

http.createServer((req, res) => {
    let filename = __dirname + "/img.png";
    const createStream = fs.createReadStream(filename);
    createStream.on('open', () => {
        createStream.pipe(res);
    }).on('error', (err) => {
        res.end(err);
    })
}).listen(port, () => { console.log(`listen to port ${port}`) });

/*
    Benefits
    1.It reads the file in chunks according to a need by the user.
    2.It is faster due to its property of bringing in chunks.
    3.It is scalable as it pipes the content directly to the HTTP -- response object.
    Disadvantages
    1.In this case memory cleaning by nodejs is not easy.
*/



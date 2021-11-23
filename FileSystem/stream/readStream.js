const fs = require('fs');

const stream = fs.ReadStream('img.png');

const createStream = fs.createReadStream('img.png');

stream.on("data", (buffer) => {
    console.log(buffer);
}).on("close", () => {
    console.log('end');
});


createStream.on('data', (chunk) => {
    console.log(chunk);
}).on('error', (err) => {
    console.log(err);
})

/*
    Benefits
    1.It reads the file in chunks according to a need by the user.
    2.It is faster due to its property of bringing in chunks.
    3.It is scalable as it pipes the content directly to the HTTP -- response object.
    Disadvantages
    1.In this case memory cleaning by nodejs is not easy.
*/



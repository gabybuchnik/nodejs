const fs = require('fs');

fs.open('img.png', 'r',  (err, fd) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(fd)
});
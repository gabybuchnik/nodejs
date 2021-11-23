const fs = require('fs');

fs.unlink('../write/writeFile.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('deleted complete.');
});
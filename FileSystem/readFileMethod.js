const fs = require('fs');
const path = require('path');
const rootFolder = path.dirname(__dirname);

const asyncReadFromFile = (filePath) => {
    console.log('first execute');

    fs.readFile(rootFolder + filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('third execute -- event loop async');
        console.log(data);
    });

    console.log('seconde execute');
}

module.exports = asyncReadFromFile;
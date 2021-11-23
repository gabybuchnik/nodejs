const { writeToFile, writeToFileSync } = require('./writefileMethod');
const path = require('path');

const fileName = 'writeFile.txt';
const fileName2 = 'writeFileSync.txt';
const dataText = 'some data...';

//async -- write operation go to event loop
console.log(1);
writeToFile(path.join(__dirname, fileName), dataText);
console.log(2);

//sync
console.log(1);
writeToFileSync(path.join(__dirname, fileName2), dataText);
console.log(3);
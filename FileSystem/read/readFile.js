const { asyncReadFromFile, syncReadFromFile } = require('./readFileMethod');

//async -- read operation go to event loop

console.log(1);
asyncReadFromFile('/README.md');
console.log(2);


//sync 

console.log(1);
syncReadFromFile('/README.md');
console.log(3);


const fs = require('fs');

//

const writeToFile = (file, data) => {
    fs.writeFile(file, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('write success');
    })
}

const writeToFileSync = async (file, data, overwrite = true) => {
    let flag = 'w';
    if (!overwrite) {
        flag = 'a';
    }
    try {
        fs.writeFileSync(file, data, { encoding: 'utf8', flag });
        console.log('write sync success');
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = { writeToFile, writeToFileSync }
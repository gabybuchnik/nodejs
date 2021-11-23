const fs = require('fs');

const asyncReadFromFile = (filePath) => {
    fs.readFile(process.cwd() + filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    });
}

const syncReadFromFile = (filePath) => {
    try {
        const data = fs.readFileSync(process.cwd() + filePath, 'utf8')
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}

module.exports = { asyncReadFromFile, syncReadFromFile };
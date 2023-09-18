const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const file = process.argv[3];


const writeStream = fs.createWriteStream(file, { encoding: 'utf8' });


request.get(url)
    .on('error', (err) => {
        console.error(err);
    })
    .pipe(writeStream)
    .on('finish', () => {
        console.log(file);
    });
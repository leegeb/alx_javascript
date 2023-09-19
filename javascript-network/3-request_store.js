#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const url = process.argv[2];
let file = process.argv[3];

request.get(url, { encoding: 'utf-8' }, (error, response, body) => {
    if (error) {
        console.error(error);
    } else if (response.statusCode === 200) {
        fs.writeFile(file, body, 'utf8', (error) => {
            if (error) {
                console.log(error);
            }
        });
    }
});
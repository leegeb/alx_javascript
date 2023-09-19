#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
    } else if (response.statusCode === 200) {
        let count = 0;
        response = JSON.parse(body);
        let result = response.results;
        for (let i = 0; i < result.length; i++) {
            let characters = result[i]['characters'];
            for (let j = 0; j < characters.length; j++) {
                if (characters[j].includes('18')) {
                    count++;
                }
            }
        }
        console.log(count);
    }
});
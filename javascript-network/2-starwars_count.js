#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, (error, response, body) => {
    if (error) {
        console.error(error);
    } else if (response.statusCode === 200) {
        let count = 0;
        const responseData = JSON.parse(body);
        const films = responseData.results;

        for (let i = 0; i < films.length; i++) {
            const characters = films[i].characters;
            if (characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
                count++;
            }
        }

        console.log(count);
    } else {
        console.error(`Failed to retrieve data. Status code: ${response.statusCode}`);
    }
});




#!/usr/bin/node

const req = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

require.get(url, (err, response, body) => {
    if (err)
        console.log(err);
    else {
        response = JSON.parse(body);
        let cast = response.characters;
        for (let i = 0; i < cast.length; i++) {

            req.get(cast[i], (error, response, bod) => {
                if (error)
                    console.log(error);
                else {
                    response = JSON.parse(bod);
                    console.log(resp.name);
                }
            });

        }
    }
});
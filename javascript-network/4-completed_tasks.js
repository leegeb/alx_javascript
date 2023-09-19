#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const completed = {};

request.get(url, (error, response, body) => {
    if (error) {
        console.log(error);
    } else {
        response = JSON.parse(body);
        for (let i = 0; i < response.length; i++) {
            let count = 0;
            let compare = response[i].userId;
            for (let j = 0; j < response.length; j++) {
                if (response[j].userId == compare && response[j].completed == true) {
                    count++;
                }
                if (count != 0) {
                    completed[x] = count;
                }
                console.log(completed);
            }
        }
    }
});

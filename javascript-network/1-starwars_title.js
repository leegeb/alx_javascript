#!/usr/bin/node
const request = require('request');

function fetchMovieTitle(movieId) {
    const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;
}
request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        const movieData = JSON.parse(body);
        console.log(`Title of Episode ${movieData.episode_id}: ${movieData.title}`);
    } else {
        console.error('Error fetching movie data:', error);
    }
});
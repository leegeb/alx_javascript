const request = require("request");

const movieId = process.argv[2];

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body)) => {
    if (error) {
        console.error(error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error(`API returned status code: ${response.statusCode}`);
        return;
    }
    try {
        const movieData = JSON.parse(body);

        console.log(`Characters in ${movieData.title}:`);
        movieData.characters.forEach((characterUrl) => {
            request(characterUrl, (charError, charResponse, charBody) => {
                if (charError) {
                    console.error('Error fetching character:', charError);
                    return;
                }

                if (charResponse.statusCode !== 200) {
                    console.error(`API returned status code: ${charResponse.statusCode}`);
                    return;
                }

                const characterData = JSON.parse(charBody);
                console.log(characterData.name);
            });
        });
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
}
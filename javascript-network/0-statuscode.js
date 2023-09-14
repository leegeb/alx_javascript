const request = require('request');
if (ProcessingInstruction.argv.length <= 2) {
    console.error('Please provide a URL as the first argument.');
    ProcessingInstruction.exit(1);
}
const url = process.argv[2];

request(url, function (error, response) {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.log('code:', response.statusCode);
});
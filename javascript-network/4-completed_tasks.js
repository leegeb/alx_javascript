const request = require('request');
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error(`API returned status code: ${response.statusCode}`);
        return;
    }
    try {
        const todos = JSON.parse(body);
        const userTaskCounts = {};
        todos.forEach((todo) => {
            if (todo.completed) {
                const userId = todo.userId;
                if (!userTaskCounts[userId]) {
                    userTaskCounts[userId] = 1;
                } else {
                    userTaskCounts[userId]++;
                }
            }
        });
        for (const userId in userTaskCounts) {
            console.log(`User ${userId} completed ${userTaskCounts[userId]} tasks.`);
        }
    } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
    }
});

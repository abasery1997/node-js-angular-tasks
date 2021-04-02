const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    const url = req.url;
    let data;
    const todos = [{
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        },
        {
            "userId": 1,
            "id": 7,
            "title": "illo expedita consequatur quia in",
            "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
            "userId": 1,
            "id": 9,
            "title": "molestiae perspiciatis ipsa",
            "completed": false
        },
        {
            "userId": 1,
            "id": 10,
            "title": "illo est ratione doloremque quia maiores aut",
            "completed": true
        }
    ]
    if (url === '/') {
        data = fs.readFileSync("./pages/index.html");
        console.log('request to home page')
    } else if (url === '/todoapp') {
        data = fs.readFileSync("./pages/todoApp.html");
        console.log('request to todo App')
    } else if (url === '/main.js') {
        data = fs.readFileSync("./pages/main.js");
        console.log('request script for to do app')
    } else if (url === '/fetched') {
        data = JSON.stringify(todos);
        console.log('request fetched data')
    } else {
        data = fs.readFileSync("./pages/404.html");
        console.log('request to page not found')
    }
    res.end(data)
})
server.listen(3300);
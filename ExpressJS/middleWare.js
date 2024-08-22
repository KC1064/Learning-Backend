const express = require('express');
const app = express();

const logger = (req, res, next) => {
    console.log(`${new Date()}, Request[${req.method}], [${req.url}]`);
    next();
}

// console.log("Server is starting..."); // Add this line


app.get('/', (req, res) => {
    res.send('Hello World!');
    app.use(logger);
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
app.use(logger);

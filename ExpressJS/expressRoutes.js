const express = require('express');
const app = express(); 
const path = require('path');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
});

app.get('/Contact', (req, res) => {
    res.send('<h1>Contact Page</h1>');
});

app.get('/files', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/json', (req, res) => {
    res.json([{
        name: 'John',
        age: 30
    },{
        name: 'Jane',
        age: 25
    }]);
});

app.listen(3000, () => {
    console.log("Server starting on port 3000");  
});

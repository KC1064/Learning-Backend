const express = require('express');
const app = express();
const phone = require('./data'); 

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1> <a href="/phones">Phones</a> <a href="/sale">Sales</a>');
});


app.get('/phones', (req, res) => {
    res.json(phone);
});

app.get('/sale',(req,res)=>{
    const newItems = phone.map((item)=>{
        const {name,price} = item;
        return {name,price};
    })
    res.json(newItems);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// To display the phones with their ids
app.get('/phones/:id', (req, res) => {
    console.log(req.params);
    const phoneID = parseInt(req.params.id); 
    const phone_data = phone.find(item => item.id === phoneID);
    if (phone_data) {
        res.json(phone_data);
    } else {
        res.status(404).json({ error: 'Phone not found' });
    }
});

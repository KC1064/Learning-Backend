const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('Example'));

// app.get('/', (req, res) => {
//     res.send('Home Page');
// });

app.listen(3000, () => {
    console.log("Server running.....");
});


// app.get('/',(req,res)=>{
//     // if(req.url !== '/'){
//     //     res.send("Hello");
//     // }
//     // res.sendFile(path.join(__dirname,'Example','index.html')) 
//     // -> The problem is the other files that are linked will not work.
// });
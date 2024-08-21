const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url !== '/'){
        return res.end("Error")
    }

    // const fileReadable = fs.createReadStream('file.txt');
    // const fileReadable = fs.createReadStream('fle.txt');
    // fileReadable.on('data',(chuck)=>{
    //     res.write(chuck);
    // })

    // fileReadable.on('end',()=>{
    //     res.end();
    // })
    
    // fileReadable.on('error',(error)=>{
    //     console.log(error);
    //     res.statusCode = 500;
    //     res.end("Internal Server Error");
    // })

    const fileReadable = fs.createReadStream('file.txt');
    fileReadable.pipe(res);
});

server.listen(3000,()=>{
    console.log("Listening on 3000.......");
})
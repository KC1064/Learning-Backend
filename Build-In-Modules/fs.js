const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

fs.writeFile("text2.txt","Hello This is a new file.",(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Done Successfully....");
});

fs.readFile("text2.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

fs.unlink("text2.txt",(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Removed Successfully.........");
});

fs.mkdir("New_Dir",(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("Directory Created Successfully.........");
})

fs.rmdir("New_Dir",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Directory Removed Successfully.........");
})
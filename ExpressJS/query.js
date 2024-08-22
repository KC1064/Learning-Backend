const express = require("express");
const app = express();
const phone = require("./data");

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/api/query", (req, res) => {
  console.log(req.query);

  let sortedPhone = [...phone];
  const { search } = req.query;
  if (search) {
    sortedPhone = sortedPhone.filter(
      (phone) => phone.name.toLowerCase().startsWith(search.toLowerCase()) // Convert search query to lowercase
    );
  }

  res.json(sortedPhone);
});

app.get("/api/price", (req, res) => {
    console.log(req.query);
  
    let sortedPhone = [...phone];
    const { search,limit } = req.query;
  
    if (search) {
      sortedPhone = sortedPhone.filter((phone) => phone.price > 2000); // Fixed filter logic
    }
    
    sortedPhone = sortedPhone.slice(0, limit);
    res.json(sortedPhone);
  });
  

app.listen(3000, () => {
  console.log("Starting server......");
});

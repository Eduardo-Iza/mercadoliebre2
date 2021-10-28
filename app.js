const express = require('express');
const server = express();
const path = require('path');
const port = process.env.PORT || 3000;

server.use ("/static", express.static("public"));
server.set("views",path.join(path.dirname(__dirname,"views")));

server.listen(port, () =>{
    console.log("port 3000")
});
server.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"views/home.html"));
});


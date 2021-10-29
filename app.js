const express = require('express');
const app = express();
const path = require('path');
/*const publicPath = path.resolve(__dirname, "./public");*/
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log("port 3000")
});

app.use ("/static", express.static('public'));
/*app.set("views",path.join(path.dirname(__dirname,"views")));*/

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/home'));
    
});
app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/login'));
});
app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,'./views/register'));
});

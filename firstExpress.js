const express = require('express');
const app = express();
const port = process.argv[2]
app.use(express.static('public'))
app.get('/',(req, res)=>{
    res.send("<h1>Hello, World!</h1>");
});

app.get('/class',(req,res)=>{
    res.send('<p>Hello, class!</p>')
})

app.listen(port);
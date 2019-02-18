const express = require('express');

var app = express();
var PORT = 3000;

app.get('/', (req,res)=>{
    res.send('Hello World');
})


app.get('/users', (req,res)=>{
    let users = [
        {name: 'Ken', age:20},
        {name: 'Kelvin', age:20},
        {name: 'Alex', age:20},
    ]
    res.json(users);
})

app.get('/group', (req,res)=>{
    res.status(404).json({errorMessage:'invalid request'})
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
})

console.log("dsakjfdhskjdfh");
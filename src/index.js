require('../public/js/demo.js');

require('../public/css/demo.css');

const demo=require('../public/js/demo');

const express = require('express');
const http = require('http');

var app = express();
http.createServer(app).listen(8080,()=>{
    console.log('Server Listening on 6666...');
});

app.use(express.static('../'));
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const server = express();
const path = require('path');
server.use(express.urlencoded({extended: false}));
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'));
server.use(expressLayouts);


const urlPersona = require('./routers/persona')
server.use(urlPersona)

server.get('/',(req, res) => {
    res.render('home')
})

server.listen(8080, ()=>{
    console.log('listening on port: 8080')
});
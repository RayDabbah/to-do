const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const seed = require('./seed');
const routes = require('./routes');
seed();
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
mongoose.connect("mongodb://localhost/toDoApp");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes);
app.listen(port, ()=> console.log(`Server is listening on port ${port}.`))
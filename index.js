const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const seed = require('./seed')
seed(app);
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
mongoose.connect("mongodb://localhost/toDoApp");

app.listen(port, ()=> console.log(`Server is listening on port ${port}.`))
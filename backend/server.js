var express = require("express");
var app = express();


var bodyParser = require("body-parser");

var mongoose = require("mongoose");
var cors = require("cors");

var router = require('./router')
// chla bhai

app.use(cors());
// app.use('/myfiles',express.static('game'));
app.use(bodyParser.urlencoded({ extended: false }))
//app.use('/',express.static('/'));
// parse application/jsons
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/nativeDatabase', {
    useNewUrlParser: true,

    useUnifiedTopology: true
});


app.use("/",router);


app.listen(8000, () => {
    console.log("server is running   http://localhost:8000");

})


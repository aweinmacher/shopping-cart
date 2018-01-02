var express = require("express");
var app = express();
app.listen(5000);

app.use(express.static('node_modules'));
app.use(express.static('public'));
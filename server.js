// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
// port for heroku or just create PORT 3000
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
        



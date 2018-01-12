// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
// port for heroku or just create PORT 3000
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// linking apiRoutes and htmlRoutes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
        



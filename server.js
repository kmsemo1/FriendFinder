// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
// port for heroku or just create PORT 3000
var PORT = process.env.PORT || 3000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, '/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// linking apiRoutes and htmlRoutes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// listener
app.listen(PORT, function () {
    console.log("App listening on http://http://localhost:" + PORT);
});
        



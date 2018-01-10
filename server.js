// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// array to hold friends
var friend = [];

// Get all friend
app.get("/friendfinder", function(req, res) {
    res.json(reservations);
});
        
// post new friend to array
app.post("/api/friend", function(req, res) {

  var newFriend = req.body;

  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  reservations.push(newFriend);

  res.json(newFriend);
});

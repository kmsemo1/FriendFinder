var path = require("path");

// array to hold friends
var friend = [];

// Get all friend
app.get("/friendfinder", function(req, res) {
    res.json(friend);
});
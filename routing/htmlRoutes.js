var path = require("path");


// routes to html files
module.exports = function (app) {

    // route to friendfinder.html or home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/friendfinder.html'))
    });
    
    // route to survey
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'))
    });

};

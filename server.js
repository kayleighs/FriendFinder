var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "./app/public"));

//ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


//Starts server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

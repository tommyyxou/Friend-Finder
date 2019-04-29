// Dependencies
// =============================================================
let express = require("express");
let path = require("path");

let HTMLRoutes = require('./app/routing/htmlRoutes');
let apiRoutes = require('./app/routing/apiRoutes');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
}); 

app.use(HTMLRoutes);
app.use(apiRoutes);
// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');



// Set up Express app
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));


require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);








// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.use(express.static('public'));

app.engine('hbs', exphbs());
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});

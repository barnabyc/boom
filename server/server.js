var requirejs = require('requirejs');
var express = require('express');
var port = 2020;
var app = express( port );

// Configuration
app.configure(function()
{
    app.use(express.logger());
    app.set('view engine', 'jade');
    app.set('view options', { doctype:'html', pretty:true, layout:false });
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static('../'));

    app.use(express.static('/game/'));

    app.engine('html', require('ejs').renderFile);
});


app.configure('development', function()
{
    app.use(express.logger());
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function()
{
    app.use(express.logger());
    app.use(express.errorHandler());
});

// Routes
app.get('/', function(req, res)
{
    app.set('views', './');
    res.render('../index.html');
});


// Start the app server
app.listen(2020, function ()
{
    console.log("BOOM is running: http://localhost:" + port);
});




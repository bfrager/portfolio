var express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    ejs = require('ejs'),
    ejsLayouts = require('express-ejs-layouts'),
    fs = require('fs'),
    port = process.env.PORT || 3000

//middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//routes
app.use(express.static(__dirname + '/public'))

app.listen(port, function(){
  console.log('server running on port ' + port)
})

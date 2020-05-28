// setup packages
var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    flash           = require('connect-flash'),
    methodOverride  = require('method-override');

// route variables
var indexRoutes     = require("./routes/index"),
    aboutRoutes     = require("./routes/about"),
    contactRoutes   = require("./routes/contact");

// database

// app init
app.use( bodyParser.urlencoded( {extended:true} ));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// middleware

// use my routes
app.use(indexRoutes);
app.use("/about", aboutRoutes);
app.use("/contact", contactRoutes);

// server spinup
app.listen(3000, () =>{
    console.log("Server spinning");
});
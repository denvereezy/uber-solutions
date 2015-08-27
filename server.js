var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
bodyParser = require('body-parser'),

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var fs = require('fs');
var user = {};
var checkUser = function(req, res, next){
  if (req.session.username){
    return next();
    res.render("index",{layout: false})
  }
  else{// the user is not logged in redirect him to the login page
    res.redirect('/login');
  }
};

//user sign up
app.get("/signup", function(req, res){
  res.render("signup");

})

app.get("/signup", function(req, res){
  res.render("home");

})

app.get("/login", function(req, res){
  res.render("index", {layout: false});

})

app.post("/home", function(req, res){
  res.render("home");

})

app.post("/", function(req, res){
  res.render("index",{layout: false});

})

app.post("/index", function(req, res){
  res.render("index", {layout: false});

})

app.get("/demo", function(req, res){
  res.render("demo",{layout: false});

})

app.post("/index", function(req, res){
  res.render("demo");

});

app.post("/signup", function(req, res){
  res.render("index", {layout: false});

})

app.listen(5000);

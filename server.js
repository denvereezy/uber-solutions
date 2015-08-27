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

app.get("/login", function(req, res){
  res.render("login", {layout: false});

})

app.post("/login", function(req, res){
  res.render("home");

})

app.get("/", function(req, res){
  res.render("login",{layout: false});

})

app.post("/", function(req, res){
  res.render("index",{layout: false});

})

app.get('/more',function(req,res){
	res.render("demo",{layout: false});
})

app.post("/home", function(req, res){
  res.render("home");

});

app.listen(5000);

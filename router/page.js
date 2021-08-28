let express = require("express");
let route = express.Router();
//let db = require('../database/config');
// //const mod_product =require("../model/products");

// route.get('/', function(req, res) {

//   res.render('login', {title: 'Login',url:url});
// });

route.get("/index", function (req, res) {
  res.render("index", { title: "index" });
});


module.exports = route;

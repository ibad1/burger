var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
router.get("/index", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("hbsObject results: ");
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/index", function(req, res) {
	burger.insertOne(req.body.name, function(data) {
		res.redirect("/index");
	});
});

router.put("/index:id", function(req, res) {
  var condition = "id = " + req.params.id;
  var devourVal = req.body.devour;
  console.log(req.params.id);

  console.log("condition", condition);
  console.log(devourVal);

  burger.updateOne(devourVal, condition, function() {
    res.redirect("/index");
  });
});

module.exports = router;

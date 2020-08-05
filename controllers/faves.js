const express = require("express");
const router = express.Router();

router.get("/animals", function(req, res)
{
    res.render("faves/animals", {title: "Favorite Animals", animals:["sand crab", "corny joke dog"]});
});

router.get("/foods", function(req,res)
{
    res.render("faves/foods", {title: "Favorite Foods", foods:["potatoes", "baked potatoes", "mashed potatoes", "sweet potatoes"]});
});

module.exports = router;
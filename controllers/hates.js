const express = require("express");
const router = express.Router();

router.get("/animals", function(req, res)
{
    res.render("hates/animals", {title: "Hated Animals", animals:["spiders", "earwigs", "silverfish"]});
});

router.get("/foods", function(req,res)
{
    res.render("hates/foods", {title: "Hated Foods", foods:["avocados", "cucumbers", "melons"]});
});

module.exports = router;
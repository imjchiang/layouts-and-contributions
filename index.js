const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(ejsLayouts);
app.use("/faves", require("./controllers/faves"));
app.use("/hates", require("./controllers/hates"));

app.get("/", function(req, res)
{
    res.render("home");
});

// app.get("/animals", function(req, res)
// {
//     res.render("animals", {title: "Favorite Animals", animals:["sand crab", "corny joke dog"]});
// });

// app.get("/foods", function(req,res)
// {
//     res.render("foods", {title: "Favorite Foods", foods:["potatoes", "baked potatoes", "mashed potatoes", "sweet potatoes"]});
// });

app.listen(3000, function()
{
    console.log("Listening to port 3000");
});
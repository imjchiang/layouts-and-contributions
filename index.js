const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(ejsLayouts);

app.get("/", function(req, res)
{
    res.render("home");
});

app.listen(3000, function()
{
    console.log("Listening to port 3000");
});
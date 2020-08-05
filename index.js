const express = require("express");
const app = express();
const ejsLayouts = requires("express-ejs-layouts");

app.setMaxListeners("view engine", "ejs");
app.use(ejsLayouts);

app.listen(8000, function()
{
    console.log("Listening to port 8000");
})
const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const personRouter =require("./routes/personRoutes")
const menuRouter =require("./routes/menuItemRoutes")
app.use(bodyParser.json());

app.use("/person",personRouter);
app.use("/menuitem",menuRouter)

//!FOR Menu Item :

app.listen(3000, () => {
  console.log("app is start");
});

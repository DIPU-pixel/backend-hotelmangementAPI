const express = require("express");
const router = express.Router();
const Menu = require("../model/menu");
router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err,"error");
    res.status(500).json({ err: "Server Error" });
  }
});
router.post("/", async (req, res) => {
  try {
    const data = req.body; //?assuming that reqest body contains person body
    const newmenu = new Menu(data); //? create new person documents using mongose model
    const response = await newmenu.save(); //? save the new person in documents
    console.log(response, "Menu data is saved");
    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Server Error" });
  }
});

module.exports = router
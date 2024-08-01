const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newmenu = new Menu(data);

    const response = await newmenu.save();
    console.log("Data Saved!");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menu.find();
    console.log("Data Fetched!");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error!");
  }
});
// exporting
module.exports = router;

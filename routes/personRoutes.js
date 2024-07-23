const express = require("express");
const Person = require("../model/person");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Use the Mongoose model to fetch all persons from the database
    const persons = await Person.find();

    // Send the list of persons as a JSON response
    res.json(persons);
  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body; //?assuming that reqest body contains person body
    const newperson = new Person(data); //? create new person documents using mongose model
    const response = await newperson.save(); //? save the new person in documents
    console.log(response, "data saved");
    res.json(response);
  } catch (e) {
    console.log(e);
    res.status(500).json({ e: "Server Error" });
  }
});
// ? update logic
router.put("/:id", async (req, res) => {
  try {
    const personID = req.params.id;
    const upatedpersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personID,
      upatedpersonData,
      {
        new: true, //Return the udate documents
        runValidators: true, //Run mongose validation
      }
    );
    if (!response) {
      return res.status(404).json({ err: "Person not found" });
    }
    console.log("data updated");
    res.status(201).json(response);
  } catch (error) {
    console.error("Error fetching persons:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deleteID = req.params.id;
    console.log(deleteID, "deleteID")
    if (!response) {
      return res.status(404).json({ err: "Person not found" });
    }
    const response = await Person.findByIdAndDelete(deleteID);
    res.json(response);
  } catch (e) {
    console.error("Error fetching persons:", e);
    res.status(500).json({ e: "Internal server error" });
  }
});
//! check with role :
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    console.log(workType, "worktype");
    if (workType == "chef" || workType == "waiter" || workType == "manger") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(500).json({ e: "Somethings went wrong" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ e: "Server Error" });
  }
});

module.exports = router;

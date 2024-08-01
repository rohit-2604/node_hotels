const express = require("express");
const router = express.Router();
const person = require('../models/Person')
// POST method to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the person data
    console.log(data);
    // create a new person document using mongoose model
    const newPerson = new person(data);

    // save the new person to the database
    const response = await newPerson.save();
    console.log("Data Saved!");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status.json({ error: "Internal Server Error" });
  }
});

// GET method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("Data Fetched!");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status.json({ error: "Internal Server Error" });
  }
});

router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //extract the work type from the URL parameter
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const respose = await person.find({ work: workType });
      console.log("response fetched!");
      res.status(200).json(respose);
    } else {
      res.status(404).json({ error: "internal Server Error!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error!");
  }
});

router.put('/:id',async(req,res)=>{
  try {
    const personId = req.params.id
    const updateData = req.body
    
    const response = await person.findByIdAndUpdate(personId,updateData,{
      new:true,//return the updated document
      runvalidators : true//Run mongoose validation
    })
    if(!response){
      return res.status(404).json({error:'Person not found!'})
    }
    console.log('Data Updated');
    res.status(200).json(response)
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error!");
  }
})

router.delete('/:id',async(req,res)=>{
  try {
    const personId = req.params.id
    const response = await person.findByIdAndDelete(personId)
    if(!response){
      return res.status(404).json({error:"Person not Found!"})
    }
    console.log("Data Deleted Successfully!");
    res.status(200).json({message:"Data deleted successfully!"})
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error!");
  }
})
module.exports = router;

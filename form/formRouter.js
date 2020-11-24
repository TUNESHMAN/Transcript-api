const express = require("express");
// Import the helper functions and save it in a variable
const form = require("./formDB");

// Bring in the router
const router = express.Router();

// The forms endpoint here 👇👇👇
// Endpoint for adding forms
router.post("/", (req, res) => {
  // We are adding a new form so we need req.body
  const newForm = req.body;
  form
    .postForms(newForm)
    .then((freshForm) => {
      res
        .status(201)
        .json({ message: `Form created successfully`, newForm });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

module.exports = router;

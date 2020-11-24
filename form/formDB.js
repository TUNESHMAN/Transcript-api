// I brought in the database configuration
const db = require("../data/db-config");

// Export the helper function so that it can be used in the formRouter
module.exports = {
  postForms, //Function for adding a new form to the database
};

function postForms({ matricNo, yearOfGraduation, reasonForRequest }) {
  // This is the SQL equivalent of INSERT INTO forms (doctor_name, department, doctors_rank,task_description) VALUES (data to be added)
  return db("forms").insert({
    matricNo: matricNo,
    yearOfGraduation: yearOfGraduation,
    reasonForRequest: reasonForRequest,
  });
}

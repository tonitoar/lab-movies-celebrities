//  Add your code here

//ITERATION#2

const { Schema, model } = require("mongoose");

const celebritySchema = new Schema(
    {
    name: String,
    },
    {   
    occupation: String,   
    },
    {
    catchPhrase: String, 
    }
  );
  
  const Celebrity = model("Celebrity", celebritySchema);
  
  module.exports = Celebrity;
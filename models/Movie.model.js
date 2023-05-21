

const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
    {
        name: String,
    },
    {   
    occupation: String, 
    enum: ["actor", "comedian", "singer", "unknown"]   
    },
    {
    catchPhrase: String, 
    }
  );
  
  const Celebrity = model("Celebrity", celebritySchema);
  
  module.exports = Celebrity;
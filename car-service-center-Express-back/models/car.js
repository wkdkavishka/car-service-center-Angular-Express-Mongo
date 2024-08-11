// requirements
const mongoose = require("mongoose")

const schema = mongoose.Schema

const Car = new schema( {
    brand:{ type:String, required:true },
    model:{ type:String, required:true },
    numberplate:{ type:String, required:true }
},
{ timestamps:true } 
 )

 module.exports = mongoose.model("Car", Car)
 
// requirements
const mongoose = require("mongoose")
const model_car = require("../models/car")

// view all cars
const get_car_all = async (req, res) => {
    try{
        const cars = await model_car.find({})
        res.status(200).json(cars)
    }catch(error){
        res.status(404).json( {error: "seem like no cars available" } )
    }
}

// view a single car
const get_car_one = async (req, res) => {
    try{
        const {id} = req.params
        // id validity check
        if(!mongoose.Types.ObjectId.isValid(id)){ return res.status(404).json( {error: "seems id not valid" } )}

        const car = await model_car.findById(id)
        //responce
        res.status(200).json(car)

    }catch(error){
        //responce
        res.status(404).json( {error: "seem no such file" } )
    }
}

// delete car
const delete_car = async (req, res) => {
    try{
        const {id} = req.params
        // id validity check
        if(!mongoose.Types.ObjectId.isValid(id)){ return res.status(404).json( {error: "seems id not valid" } )}

        const car = await model_car.findOneAndDelete({_id: id}) // in mongodb id is as _id
        //responce
        res.status(200).json(car)

    }catch(error){
        //responce
        res.status(404).json( {error: "seem no such file" } )
    }
}

//update car
const update_car = async (req, res) => {
    try{
        const {id} = req.params
        // id validity check
        if(!mongoose.Types.ObjectId.isValid(id)){ return res.status(404).json( {error: "seems id not valid" } )}

        const car = await model_car.findOneAndUpdate( {_id: id}, {...req.body} ) // ...(object) --> spread properties
        //responce
        res.status(200).json(car)

    }catch(error){
        //responce
        res.status(404).json( {error: "seem no such file" } )
    }
}

// new car
const add_car = async(req, res) => {
    const { brand, model, numberplate } = req.body // deconstruction
    try{
        const car = await model_car.create( {brand, model, numberplate} ) // add car to db
        // response
        res.status(200).json(car)

    }catch(error){
        // response
        res.status(400).json( {error: error.message } )
    }
} 






// export
module.exports = {
    add_car,
    get_car_all,
    get_car_one,
    update_car,
    delete_car
}
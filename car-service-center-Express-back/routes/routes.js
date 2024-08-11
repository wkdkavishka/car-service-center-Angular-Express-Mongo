// requirements
const express = require("express") // require express
//const model_car = require("../models/car")
const {
    add_car, get_car_all, get_car_one, update_car, delete_car
} = require("../route_control/controls")

// router instance
const router = express.Router()

// paths/routes --------------------------
// home
router.get('/', get_car_all) // read 

// view car
router.get('/get-car/:id', get_car_one) //read

// add new car
router.post('/',add_car) // create

// update a car
router.patch('/:id', update_car) // update

// delete a car
router.delete('/:id', delete_car) // delete


//----------------------------------------







// export router module
module.exports = router
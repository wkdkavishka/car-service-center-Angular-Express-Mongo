// requirements
const express = require("express") // require express
const mongoose = require("mongoose") // database connector //like cursor in flask
const routes = require("./routes/routes") 
//const cors = require("cors")

//configs --------------
const port = 4000
const db_name = "web_notes"

const database_path = "mongodb://localhost:27017/"+db_name
//----------------------

// initial express in --> app
const app = express()


// set mongoose to user strictQuery --IFX deprecation warning
mongoose.set('strictQuery', true);

// database connection  // listen port
mongoose.connect(database_path) // async function // return a promise
    .then( () => { //  catch promise
            app.listen( port, () => {console.log("listening to PORT --> ", port)} )
        } 
    )
    .catch( (error) => {console.log("error --> ",error)} )


// some middle ware  -------------------------
app.use(express.json()) // check for the request has a body

app.use( (req, res, next)=> {
        console.log(req.path, req.method) // print the request
        next() // to next middleware // to routes/paths
    } 
) 
//--------------------------------------------

/*
app.use(
    cors({
        origin: "http//localhost:3000",
        methods:["GET", "POST"]
    })
)
*/


// routes/paths ------
app.use("/express_api", routes)


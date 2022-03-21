//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())

let counter = 0

app.get("/", (req, res) => {
    console.log("got request!")
    res.json("Hello!")
   })

   app.get("/bye", (req, res) => {
    res.json({msg: 'goodbye!'})
  })

  app.delete("/bye", (req, res) => {
    res.json({msg: 'goodbye forever!'})
  })

  app.get("/greeting", (req, res) => {
    counter ++
    res.json({msg: 'good day!'})
  })

  app.get("/greeting/morning", (req, res) => {
    counter ++
    res.json({msg: 'good morning!'})
  })

  app.get("/greeting/afternoon", (req, res) => {
    counter ++
    res.json({msg: 'good afternoon!'})
  })

  app.delete("/greeting", (req, res) => {
    counter ++
    res.json({msg: 'good bye!'})
  })

  app.get("/count", (req, res) => {
    res.json({Counter: counter})
  })

  /* Extension */
  app.get("*", (req, res) => {
    res.json({msg: 'good afternoon!'})
  })


//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})
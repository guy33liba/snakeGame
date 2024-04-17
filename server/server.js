const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
app.use(cors())
app.use(express.json())

const workoutSchema = new mongoose.Schema({
  upperBody: String,
  abs: String,
  cardio: String,
  legs: String,
})
const WorkOut = mongoose.model("WorkOut", workoutSchema)
const workoutsComments = []

app.post("/comments", (req, res) => {
  const { upperBody, lowerBody, repetition, failure } = req.body
  const newComment = new WorkOut({ upperBody, lowerBody, repetition, failure })
  newComment.save().then((comment) => res.send(comment))
})
app.get("/comments", (req, res) => {
  res.send("hello")
})
app.listen(4000)

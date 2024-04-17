import React from "react"
import Training from "./training-app/Training"
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./training-app/components/home/Home"
import UpperBody from "./training-app/components/upper-body/UpperBody"
import Legs from "./training-app/components/legs/Legs"
import Abs from "./training-app/components/abs/Abs"
import Cardio from "./training-app/components/cardio/Cardio"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upperbody" element={<UpperBody />} />
        <Route path="/legs" element={<Legs />} />
        <Route path="/abs" element={<Abs />} />
        <Route path="/cardio" element={<Cardio />} />
      </Routes>
    </Router>
  )
}

export default App

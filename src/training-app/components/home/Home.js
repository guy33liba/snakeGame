import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import bodyBuilder from "../../videos/body-builder.mp4"
import "./Home.css"
import Training from "../../Training"
import axios from "axios"
const Home = () => {
  const [upperBody, setUpperBody] = useState("")

  const getWorkouts = async () => {
    const { data } = await axios.get("http://localhost:4000/comments")
    setUpperBody(data)
  }
  useEffect(() => {
    getWorkouts()
  })
  return (
    <div class="background-video">
      <video autoplay muted loop id="bgVideo">
        <source src={bodyBuilder} type="video/mp4" />
      </video>

      <div className="links">
        <div>
          <Link to="/" className="color">
            Home
          </Link>
        </div>
        <div>
          <Link to="/upperBody" className="color">
            UpperBody
          </Link>
        </div>
        <div>
          <Link to="/Legs" className="color">
            Legs
          </Link>
        </div>
        <div>
          <Link to="/Cardio" className="color">
            Cardio
          </Link>
        </div>
        <div>
          <Link to="/Abs" className="color">
            Abs
          </Link>
        </div>
      </div>
      <Training />
    </div>
  )
}

export default Home

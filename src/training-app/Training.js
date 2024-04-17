import React, { useEffect, useState } from "react"
import bodyBuilder from "./videos/body-builder.mp4"
import UpperBody from "./components/upper-body/UpperBody"
import axios from "axios"
const Training = () => {
  const [workouts, setWorkouts] = useState([])
  const [lowerBody, setLowerBody] = useState("")

  return (
    <div>
      <div class="background-video">
        <video autoplay muted loop id="bgVideo">
          <source src={bodyBuilder} type="video/mp4" />
        </video>
        <div className="comments">
          <div className="header">tell me which workout better for you</div>
          <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Comments Here.."></textarea>
            <button style={{ fontSize: "30px" }}> Upload Comments</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Training

import React, { useState } from "react"
import { useEffect } from "react"

const Snake = () => {
  const [board, setBoard] = useState(Array(240).fill(null))
  let [snakePosition, setSnakePosition] = useState(25)
  const [snakeBody, setSnakeBody] = useState([])
  const [foodPosition, setFoodPosition] = useState(Math.floor(Math.random() * 240))
  const [direction, setDirection] = useState("ArrowDown")
  const [previousDirection, setPreviousDirection] = useState("")

  const moveSnake = (newPosition) => {
    setSnakeBody((prevSnakeBody) => {
      const newSnakeBody = [...prevSnakeBody]
      newSnakeBody.unshift(snakePosition)
      if (newPosition !== foodPosition) {
        newSnakeBody.pop()
      }
      return newSnakeBody
    })
    setSnakePosition(newPosition)
  }

  const handleKeyDown = (e) => {
    setDirection(e.key)
    console.log(e)
  }

  const foodHandler = () => {
    if (foodPosition === snakePosition) {
      setFoodPosition(Math.floor(Math.random() * 240))
      setSnakeBody((prev) => [...prev, snakePosition])
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      switch (direction) {
        case "ArrowUp":
          if (previousDirection === "ArrowDown") break
          moveSnake((prevPosition) => (prevPosition - 16 >= 0 ? prevPosition - 16 : prevPosition))
          setPreviousDirection("ArrowUp")
          break
        case "ArrowDown":
          moveSnake((prevPosition) => (prevPosition + 16 < 240 ? prevPosition + 16 : prevPosition))
          setPreviousDirection("ArrowDown")

          break
        case "ArrowRight":
          moveSnake((prevPosition) => ((prevPosition + 1) % 16 !== 0 ? prevPosition + 1 : prevPosition))
          setPreviousDirection("ArrowRight")

          break
        case "ArrowLeft":
          moveSnake((prevPosition) => (prevPosition % 16 !== 0 ? prevPosition - 1 : prevPosition))
          setPreviousDirection("ArrowLeft")

          break
        default:
          break
      }
      foodHandler()
    }, 100)
    return () => clearInterval(intervalId)
  }, [direction, foodHandler]) // Only re-run the effect if direction changes

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <div style={{ display: "flex", width: "700px", height: "400px", flexWrap: "wrap", marginBottom: "200px" }}>
        {board.map((square, index) => {
          if (index === snakePosition || snakeBody.includes(index)) {
            return (
              <div
                key={index}
                tabIndex={0}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid black",
                  backgroundColor: snakePosition[0] === index ? "yellow" : "green",
                }}
              ></div>
            )
          } else if (foodPosition === index) {
            return (
              <div
                key={index}
                style={{ width: "40px", height: "40px", border: "1px solid black", backgroundColor: "red" }}
              ></div>
            )
          } else {
            return (
              <div
                key={index}
                tabIndex={0}
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid black",
                  backgroundColor: "white",
                }}
              ></div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Snake

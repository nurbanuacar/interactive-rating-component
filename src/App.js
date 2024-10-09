import logo from "./logo.svg"
import "./App.css"
import Rating from "./Rating"
import ThankYou from "./ThankYou"
import { useState } from "react"

function App() {
  const [rating, setRating] = useState(null)

  return (
    <>
      {!rating ? <Rating setRating={setRating} /> : <ThankYou rating={rating} />}

      <div class="attribution m-5">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Nurbanu Acar</a>.
      </div>
    </>
  )
}

export default App

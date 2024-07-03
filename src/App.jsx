

import './App.css'
import moonImage from "./assets/full-moon.png"

function App() {


  return (
   <>
    <div className="container">
    <img className="moon-image" src={moonImage} alt="Full Moon" />
    <h1 className="moon-text">The Moon is in fact Full Moon on February 12nd of 2006 !!!!</h1>
  </div>
   </>
  )
}

export default App

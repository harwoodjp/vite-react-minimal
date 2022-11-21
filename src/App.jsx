import { useState, useEffect } from "react"
import "./App.css"

const App = props => {
  const [count, setCount] = useState(props["start"])
  useEffect(() => {
    document.title = `${count}`
  })  
  return (
      <div>
        <p>Clicked {count} times</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Click me
        </button>
      </div>
  )

}

export default App

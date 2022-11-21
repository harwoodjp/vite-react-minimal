import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const App = (props) => {
  const start = parseInt(useParams()["start"]) || 0
  const [count, setCount] = useState(start)
  useEffect(() => {
    document.title = `${count}`
  })
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
      <span> {count}</span>
    </div>
  )
}

export default App

import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App start={0} />,
  },
  {
    path: "/other",
    element: <App start={5} />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

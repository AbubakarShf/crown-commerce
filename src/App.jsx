import React from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import Home from "./routes/home/Home"
const Shope = () => {
  return <h1>Shope Component</h1>
}


const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' exact element={<Navigation />}>
          <Route path='home' exact element={<Home />}/>
            <Route path='shope' exact element={<Shope />} />
          </Route>
      </Routes>
    </React.Fragment>
  )
}
export default App

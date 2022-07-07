import React from "react"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/navigation/Navigation"
import Home from "./routes/home/Home"
import SignIn from './routes/signIn/SignIn'
const Shope = () => {
  return <h1>Shope Component</h1>
}


const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
            <Route path='shope' element={<Shope />} />
            <Route path='signIn' element={<SignIn />} />
          </Route>
      </Routes>
    </React.Fragment>
  )
}
export default App

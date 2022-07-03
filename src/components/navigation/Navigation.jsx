import React from "react"
import { Outlet } from "react-router-dom"
const Navigation = () => {
  return (
    <React.Fragment>
      <div>Navigation</div>
      <Outlet />
    </React.Fragment>
  )
}

export default Navigation

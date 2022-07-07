import React from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../assets/crown.svg"
import "./navigation.scss"
const Navigation = () => {
  return (
    <React.Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/contact'>
            CONTACT
          </Link>
          <Link className='nav-link' to='/signIn'>
            SIGNIN
          </Link>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  )
}

export default Navigation

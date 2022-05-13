import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss'


//A frangment is a react component that actually renders to nothing when it gets mounted in the dom, si it's not an specific html element
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;

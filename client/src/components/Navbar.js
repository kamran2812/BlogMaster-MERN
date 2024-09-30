import React from 'react'
import "../css/navbar.css"
import {Link} from 'react-router-dom';
import logo from "../images/logo-21.jpg";

const Navbar = () => {
 
  return (
    <>
      <nav className="navbar my-0 py-0 navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid px-3 px-lg-4">
    <Link className="navbar-brand" to="/">
       <img src={logo} alt="logo"/>  <span className='soc'>Socrates</span><span className='word'> World</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">Log In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Log Out</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar

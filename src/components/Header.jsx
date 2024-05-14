import React from 'react'
import Citizen from '../assets/Citizen.jpg'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container">
  <a className="navbar-brand" href="#"><p className='text-success mb-0'>CITIZEN RESPONSE</p></a>
  {/* <a className="navbar-brand" href="#"><img src={Citizen} alt="/" className='img-fluid' style={{width:40}} /></a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar navbar-expand-lg" id="navbarSupportedContent">
      <ul className="navbar-nav ms-5 mb-2 mb-lg-0" >
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="./about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="./access">Access Reports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="./contact">Contact</a>
        </li>
    </ul>
    </div>
    <div className='report'>
      <a className="btn btn-danger" href='./report' type="report">Report A Need</a>
    </div>
  </div>
</nav>    
    </>
  )
}

export default Header
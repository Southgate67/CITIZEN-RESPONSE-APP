import React from 'react'
import Logo from '../assets/smlog.png'
import Gov from '../assets/Mr-Governor.jpg'
import Dep from '../assets/Deputy-Governor.jpg'
import Sec from '../assets/sece.png'

function About() {
  return (
    <>
<div className="bg-dark d-flex text-light mt-0 py-5 "style={{justifyContent:"space-around"}}>
<div className='text-left 'style={{paddingTop:'5px'}}>
  <h4 className='text-light'>Welcome To Anambra State.</h4>
  <p style={{color:'white', fontSize:'40px'}}>Delight your senses with our  flavourable<br /> environment, warm atmosphere, and <br />impeccable service. Join us for a <br />memorable adventure today.</p>
  <div className="align-content-center">
      <a className="btn btn-warning text-light" style={{backgroundColor: '#f5c905d7'}} href='./register' type="submit">Complaints</a>
  </div>
</div>
<div className="col-md-6" >
      <img src={Logo} className='img-fluid rounded'style={{height:350, width:500}} alt="" />
    </div>
</div>

<div className="container mt-3 pt-3">
<div className="row pt-0 mt-0" >
    <div className="col-md-6" >
      <img src={Gov} className='img-fluid rounded w-50' alt="" />
    </div>

    <div className="col-md-6" >
      <h4 className='text-dark'>GOVERNOR ANAMBRA STATE</h4>
      <h4>Provide us with your Complains</h4>
      <p>Governor Chukwuma Charles Soludo is here to make Anambra State better and to make Ndi Anambra happy. He can serve you better if you are able to logde in your complaints. He can not be everywhere at a time.</p>
      <a href="" className="btn btn-warning">Complaints</a>
    </div>
  </div>
</div>

<div className="container mt-3 pt-3">
<div className="row pt-0 mt-0" >
    <div className="col-md-6" >
      <h4 className='text-dark'>DEPUTY GOVERNOR ANAMBRA STATE</h4>
      <h4>Provide us with your Complains</h4>
      <p>Governor Chukwuma Charles Soludo is here to make Anambra State better and to make Ndi Anambra happy. He can serve you better if you are able to logde in your complaints. He can not be everywhere at a time.</p>
      <a href="" className="btn btn-warning">Complaints</a>
    </div>
    
    <div className="col-md-6" >
      <img src={Dep} className='img-fluid rounded w-50' alt="" />
    </div>
  </div>
</div>

<div className="container mt-3 pt-3">
<div className="row pt-0 mt-0" >
    <div className="col-md-6" >
      <img src={Sec} className='img-fluid rounded w-50' alt="" />
    </div>

    <div className="col-md-6" >
      <h4 className='text-dark'>SECRETARY ANAMBRA STATE</h4>
      <h4>Provide us with your Complains</h4>
      <p>Governor Chukwuma Charles Soludo is here to make Anambra State better and to make Ndi Anambra happy. He can serve you better if you are able to logde in your complaints. He can not be everywhere at a time.</p>
      <a href="" className="btn btn-warning">Complaints</a>
    </div>
  </div>
</div>
    </>
  )
}

export default About
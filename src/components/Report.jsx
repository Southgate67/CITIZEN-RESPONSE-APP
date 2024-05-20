import React from 'react'
// import Search from './Search'
import Form2 from './Form2'
import Human3 from "../assets/Human3.jpg"

function Report() {
  return (
    <>
    <div className="hero">
        <div className="container text-center pt-5">
          <h1 className="text-light" style={{marginTop: "60px"}}>
            Enter Your Report Here
          </h1>
          <p className="text-danger pt-3" style={{fontSize: "24px"}}>Your sincere report can make a big difference for your community and contribute to the development of our dear nation</p>
        </div>
      </div>

    <div className="container">
        <p className='px-5 pt-5'>Many communities in Nigeria are overwhelmed with many challenges which often stay unreported to the relevant government agencies, making it difficult for government to respond appropriately, thus leading to significant economic and human losses and hindering economic growth and stability.</p>

        <p className='px-5 pt-1'><span className="text-success">CITIZEN RESPONSE</span> is a platform that will enable citizens to report the challenges, emergencies, and threats in their communities . We aim to empower residents in every community with the right tool that will amplify their voices and ensure their active contribution in enhancing transparency, accountability, and good governance at all levels of government.</p>

        <p className='px-5 pt-1'><span className="text-success">CITIZEN RESPONSE</span> is committed to promoting sustainable development across the country. Let's join hands and build a safer and more prosperous, and enviable nation.</p>
    </div>

    <div className="container">
    <div className="row pt-4">
          <div className="col-md-4 mt-3">
            <img
              src={Human3}
              className="img-fluid rounded" style={{width: "300px"}}
              alt=""
            />
            <p className='pt-3'>Be empowered today to make a great difference for you community.</p>
          </div>

          <div className="col-md-8 text-center mt-2">
            <h4 className='pb-1'>SEARCH</h4>
            <h5 className='pb-3'>To search for reports, enter search details here</h5>
          <Form2/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Report
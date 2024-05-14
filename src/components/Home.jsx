import React from 'react'
import Community1 from '../assets/Community1.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Complaints from '../assets/Complaints.png'
import Resolved from '../assets/Resolved.png'
import Calls from '../assets/Calls.png'
import Social from '../assets/Social.jpeg'



function Home() {

  return (
    <>
    
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    
    <div class="carousel-item active" data-bs-interval="10000">
    <img src="../src/assets/Human 5.png" class="d-block w-100"style={{height:650}} alt="img"/>
    <div class="carousel-caption d-none d-md-block pb-5 mb-5">
         <h1 className='text-light'style={{fontSize:50}} >Welcome To Citizen Response</h1>
         <h3>Your platform for empowering communities and amplifying your voices.</h3>
          <p>Together, we're making a difference by connecting community needs with government interventions. </p>
       </div>
    </div>
{/* first carousel end */}


{/* second carousel begins */}
    <div class="carousel-item" data-bs-interval="2000">
    <img src="../src/assets/images9.png" class="d-block w-100"style={{height:650}} alt="img"/>
    <div class="carousel-caption d-none d-md-block pb-5 mb-5">
    <h1 className='text-light'>EMPOWERING COMMUNITIES</h1>
  <p style={{color:'white', fontSize:'20px'}}>We provide a platform for reporting community needs, government engagement and community empowerment.</p>
  </div>
  </div>
{/* second carousel ends */}

{/* third carousel begins */}

  <div class="carousel-item" data-bs-interval="2000">
    <img src="../src/assets/images10.png" class="d-block w-100"style={{height:650}} alt="img"/>
    
    <div class="carousel-caption d-none d-md-block pb-5 mb-5">
    <h1 className='text-light'>COMMUNITY CONNECT</h1>
  <p style={{color:'white', fontSize:'20px'}}>We provide an avenue for communities members to converge and dissect issues common to them and relay their needs to the appropriate government agency for timely intervention.</p>
  </div>
  </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>


{/* make your voice heard section */}
  <div className="container ">
    <div className="text-center mt-5">
          <h2 className='text-success'>READY TO MAKE YOUR VOICE HEARD?</h2>
    </div>
        <div className="bg-red mx-auto text-center mt-3"> <a href="" className="btn btn-danger">Click Here</a> </div>
        <div className='mt-3'> <p>Citizens voices are often not heard due to several hindrances. This negates the possibility of government staying abreast with the emerging challenges and problems in different communities  in Nigeria, thus, hindering citizens active participation in the  decision-making processes and the development of inclusive policies for effective governance at levels. We facilitate seamless communication between communities and government agencies, empowering communities to address their needs effectively, and promoting transparency and accountability in government interventions.</p>
        </div>
  </div>

<div className="container mt-3 pt-3">
<div className="row pt-0 mt-0" >
    <div className="col-md-6" >
      <img src={Community1} className='img-fluid rounded' alt="" />
    </div>

    <div className="col-md-6 mt-5" >
      <h1 className='text-success'>WHY JOIN OUR PLATFORM?</h1>
      <p>CITIZEN RESPONSE    is a user-friendly and citizen-centric web application were the citizens in each community in Nigeria can report the challenges and problems in their communities, such as environmental disasters, security threats, pollution, and other needs to the relevant government agencies and to their constituency representatives.</p> <p>The platform enables direct reporting to the concerned authorities without any third-party hindrance or interference.</p>
      <a href="" className="btn btn-success">JOIN</a>
    </div>
  </div>
</div>

{/* History Section */}
<section id='history' className='py-5'>
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center">
        <div className='historyArea text-center'>
          <h3 className='text-success'>Our History</h3>
          <p>Founded in February 2024, <span className='text-success'>CITIZEN RESPONSE</span> is a non-profit social enterprise. We aim to create a viable platform that will enhance transparency, accountability, good governance, and create increased citizens’ active participation in governance.  Since inception, we have...</p>

          <button type='button' name='button' className='btn btn-success px-3'>Read More</button>
        </div>
      </div>

      {/* Z-index Image */}
      <div className="col-md-6 text-center">
        <div className='historyImage'>
          <img src="../src/assets/images11.png" className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  </div>
</section>


{/* Our Work Section */}
<section id='work' className='py-5'>
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center">
        <div className='workArea text-center'>
          <h3 className='text-success'>Our Work</h3>
          <p><span className='text-success'>CITIZEN RESPONSE</span> facilitates seamless communication between communities and government agencies, empowering communities to effectiively raise awareness on their challenges effectively to the appropriate government agencies, and promoting transparency and accountability in government interventions. We foster community engagement by providing forums, discussions, and resources to empower community members and facilitate collaboration on their common local issues.</p>

          <button type='button' name='button' className='btn btn-success px-3'>Read More</button>
        </div>
      </div>

      {/* Z-index Image */}
      <div className="col-md-6 text-center">
        <div className='workImage'>
          <img src="../src/assets/images12.pnnpmg" className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* Our impact Section */}
<section id='impact' className='py-5'>
  <div className="container">
    <div className="row">
    <div className="impactArea col-md-6">

      <div className=''>
        <h3 className='text-success text-center'>Our Impact</h3>
        <div className="d-flex mt-3">
          <div className="flex-grow-0 ms-2">
            <img src={Complaints} className="mb-2" alt="" style={{width:65}}/>
          </div>
          <div className="flex-grow-1 ms-2">
            <p className="ms-3 mb-1 pt-3">Over <span className='text-danger'>35,800</span> complaints, challenges, and reports logged.</p>
          </div>
        </div>
      </div>

      <div className="d-flex mt-1">
        <div className="flex-grow-0 ms-2">
          <img src={Resolved} className="my-1" alt="" style={{width:65}}/>
      </div>
      <div className="flex-grow-1 ms-2">
        <p className="ms-3 mb-1" style={{paddingTop:35}}>Over <span className='text-danger'>29,490</span> complaints, challenges, and reports solved.</p>
      </div>
      </div>

      <div className="d-flex mt-1">
        <div className="flex-grow-0 ms-2">
          <img src={Calls} className="my-1" alt="" style={{width:100}}/>
      </div>
      <div className="flex-grow-1 ms-2">
        <p className="mb-3" style={{paddingTop:37}}>Over <span className='text-danger'>48,680</span> enquiries to the customercare line.</p>
      </div>
      </div>

      <div className="d-flex mt-1">
        <div className="flex-grow-0 ms-2">
        <img src={Social} className="my-1" alt="" style={{width:65}}/>
        </div>
      <div className="flex-grow-1 ms-2">
        <p className="mb-3" style={{paddingTop:37}}>Over <span className='text-danger'>30.6m</span> followers across social media platforms.</p>
      </div>
      </div>
    </div>
   
   {/* Z-index Image */}
    <div className="col-md-6 text-center">
      <div className='impactImage'>
        <img src="../src/assets/impact.png" className='img-fluid' alt="" />
      </div>
    </div>
   </div>
  </div>
</section>

{/* Our Team Section */}
<section id='team' className='py-5'>
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center">
        <div className='teamArea text-center'>
          <h3 className='text-success'>The Team</h3>
          <p>The management team embodies a diverse range of skills, experiences, and a shared commitment and vision to empower citizens, foster community engagement, and drive positive change in the 774 LGAs in Nigeria. With our expertise and dedication, we are paving the way for a more inclusive and participatory society, where every voice matters. <span className='text-success' style={{fontWeight:850}}>CITIZEN RESPONSE</span> remains committed to expanding the frontiers of socio-economic developemnt of Nigeria.</p>

          <button type='button' name='button' className='btn btn-success px-3'>Read More</button>
        </div>
      </div>

      {/* Z-index Image */}
      <div className="col-md-6 text-center">
        <div className='teamImage'>
          <img src="../src/assets/Team.jpeg" className='img-fluid' alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Home
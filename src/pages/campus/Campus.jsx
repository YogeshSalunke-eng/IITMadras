import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'

import gallery_3 from '../../assets/gallery-3.png'

import gallery_4 from '../../assets/gallery-4.png'
import Morephoto from '../../componts/Morephoto/Morephoto'
import { Outlet, useNavigate } from 'react-router-dom'

const Campus = () => {
  const navigate=useNavigate();
  return (<>
    <div className='campus'>
      <div className="campus_title">
        <h3>gallery</h3>
        <h1>campus photos</h1>
      </div>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />


            <img src={gallery_3} alt="" />

            <img src={gallery_4} alt="" />

        </div>
        
        <button className='btn see-more-btn' onClick={()=>navigate('/morephoto')}>see more here</button>
        <Outlet></Outlet>
    </div>
    
    </>
    
  )
}

export default Campus











import React from 'react'
import './Morephoto.css'
import campus_1 from '../../assets2/campus-1.png'
import campus_2 from '../../assets2/campus-2.png'
import campus_3 from '../../assets2/campus-3.png'
import campus_4 from '../../assets2/campus-4.png'
import campus_5 from '../../assets2/campus-5.png'
import campus_6 from '../../assets2/campus-6.png'
import campus_7 from '../../assets2/campus-7.png'
import campus_8 from '../../assets2/campus-8.png'
import campus_9 from '../../assets2/campus-9.png'
import campus_10 from '../../assets2/campus-10.png'



const Morephoto = () => {
  return (
    <div className='morephoto'>
<div className="photo">
  <img src={campus_1} alt="" />
  <div className="photo-title">
  <h1>Entrance Gate</h1>
  <p>Architecture: The entrance is marked by traditional red-brick pillars topped with white spherical lamps.

<br />Environment: The campus is heavily wooded with lush green trees, creating a dense canopy over the road.</p>
  </div>
  </div> 


<div className="photo">
  <img src={campus_2} alt="" />
  <div className="photo-title">
  <h1>Main Building</h1>
  <p>Institutional Signage: A large, prominent red-brick wall features the name "Indian Institute of Technology Madras" displayed in English, Hindi, and Tamil gold lettering.

<br />Architectural Style: The entrance is constructed with exposed red bricks, featuring sturdy pillars topped with white globe-style lamps.</p>
  </div>
  </div>  


<div className="photoss">
  <div className="class-photos">
  <img src={campus_3} alt="" />
    <img src={campus_4} alt="" />
</div>
  <div className="photos-title">
  <h1>The IIT Madras Research Park (IITMRP)</h1>
  <p>The IIT Madras Research Park (IITMRP) is India’s first university-based research park and serves as a premier ecosystem where industry, academia, and startups collaborate to drive deep-tech innovation. Spanning 11.42 acres in Tharamani (Chennai), the park features five interconnected towers with over 1.2 million square feet of workspace, designed around a traditional "stepped tank" courtyard that encourages informal interaction and idea exchange.</p>
  </div>
  </div>
  



<div className="photo">
  <img src={campus_6} alt="" />
  <div className="photo-title">
  <h1>Tennis Court</h1>
  <p>The Indian Institute of Technology (IIT) Madras features a high-quality tennis facility that is a cornerstone of its sports infrastructure. The primary grounds consist of four synthetic-floored outdoor courts located in the Campus Enclave near the basketball and volleyball areas.</p>
  </div>


  </div>  
<div className="photo">
  <img src={campus_5} alt="" />
  <div className="photo-title">
  <h1>Sitara indoor sport complex(2014)</h1>
  <p>Capacity: It houses six state-of-the-art badminton courts.

<br /> Includes a mezzanine-floor gallery for spectators to watch matches and high-quality professional lighting.

<br />Elite Association: The complex was inaugurated by Paralympic badminton bronze medalist Manisha Ramadoss.</p>
  </div>
  </div>  


<div className="photo">
  <img src={campus_7} alt="" />
  <div className="phto-title">
  <h1>The Auditoriam</h1>
  <p>IIT Madras boasts a variety of high-capacity auditoriums and multipurpose venues that cater to academic, cultural, and corporate events. The most iconic is the Student Activities Centre (SAC), a massive multipurpose indoor stadium with a total capacity of 2,500 people. It serves as the traditional venue for the annual convocation and major cultural festivals like Saarang, and its "central bowl" is versatile enough to host indoor sports like basketball and badminton.</p>
  </div>
  </div>  


<div className="photo"><img src={campus_8} alt="" />
  <div className="photo-title">
  <h1>Central Library</h1>
  <p>The Central Library at IIT Madras is a premier five-story, fully air-conditioned, and Wi-Fi-enabled facility situated in the heart of the campus near Gajendra Circle. It serves as a massive repository of knowledge, housing a collection of over 2 million books and providing access to more than 1,000 journal subscriptions and 84 specialized e-resource databases.</p>
  </div></div>  
       

       <div className="photos">
        <div className="class-photo">
        <img src={campus_9} alt="" />
        <img src={campus_10} alt="" /></div>
  <div className="photo-title">
  <h1>ClassRooms</h1>
  <p>Interactive Technology: Classrooms are increasingly equipped with interactive whiteboards, high-definition audio-visual systems, and high-speed internet to support digital storytelling and simulations.

<br />Hybrid Learning: Modern setups allow for simultaneous online and offline teaching, featuring recording capabilities so students can revisit lectures later.

<br />Active Learning Design: Newer spaces are being designed to move away from rigid row-and-column seating toward arrangements that encourage peer-to-peer interaction and "flipped classroom" models.</p>
  </div></div> 

    
        </div>
        
  )
}

export default Morephoto;
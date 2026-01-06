import React, { use, useState } from 'react'
import './About.css'
import about_img from '../../assets/aboutt.webp'
import play_icon from '../../assets/play-icon.png'
import { useNavigate } from 'react-router-dom'
import video from '../../assets/campus_video.mp4'


const About = () => {
const navigate=useNavigate();
// const handleCick=()=>{
//   navigate('/video');
// }
  return (
    <div className='about'>
<div className="about-left">
{/* <img src={about_img} alt="" className='about-img' /> */}
{/* <img src={play_icon} alt="" className='play-icon' onClick={handleCick}/> */}
        <video src={video} className='about-img' autoPlay muted loop controls></video>
</div>
<div className="about-right">
    <h1>About  IIT  Madras</h1>
    <h2>nurturing tomorrows leaders today!!</h2>
    <p>The Indian Institute of Technology Madras (IIT Madras) is one of India's foremost institutions of higher technological education, basic, and applied research. Founded in 1959, it was the third Indian Institute of Technology established by the Government of India, with technical, academic, and financial assistance from the then Government of West Germany. In 1961, the Institute was declared an 'Institute of National Importance' by the Parliament of India.</p>
</div>

    </div>
  )
}

export default About
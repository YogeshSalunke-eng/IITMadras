import React from 'react'
import './Btech.css'
import mechanical from '../../assets2/mech-1.png'
import computer from '../../assets2/comp.png'
import electronics from '../../assets2/electr.png'
import electrical from '../../assets2/electrical.png'
import civil from '../../assets2/civil.png'
import aerospace from '../../assets2/aerospace.png'
import { useNavigate } from 'react-router-dom'

const Btech = () => {
  const navigate=useNavigate();
  return (
    <div className='btech'>
        <div className="titlee">
            <p>B.tech(Bachelor of technology)</p>
            <br />
            <h3>Our flagship 4-year undergraduate engineering program designed
                 to foster <br />innovation and technical expertise.</h3>
        </div>
        <div className='title'>
          <h1>the courses we offers:</h1>
        </div>
        <div className="boxes">
            <div className="box">
<img src={computer} alt="" />
<h1>Computer Engineering</h1>
<div className="info">
<h3>Entrance Exam : JEE Advanced</h3>
<h3>cutoff(2025) : 159 marks </h3>
<h3> total intake(seats) : 87</h3>
<h3>Highest Package(2025) : 4.3 crore </h3>
<button onClick={(()=>navigate('/contact'))}>Enquire Now</button></div>
            </div>
            <div className="box">
                <img src={mechanical} alt="" />
                <h1>Mechanical Enginering</h1>
                <div className="info">

<h3>Entrance Exam : JEE Advanced</h3>
<h3>cutoff(2025) : 144 marks </h3>
<h3> total intake(seats) : 87</h3>
<h3>Highest Package(2025) : 40 lakh </h3>
<button onClick={(()=>navigate('/contact'))}>Enquire Now</button>
            </div>

            </div>
            <div className="box">
                <img src={civil} alt="" />
                <h1>Civil Engineerinng</h1>
                <div className="info">
<h3>Entrance Exam : JEE Advanced</h3>
<h3>cutoff(2025) : 154 marks </h3>
<h3> total intake(seats) : 87</h3>
<h3>Highest Package(2025) : 44 lakh </h3>
<button onClick={(()=>navigate('/contact'))}>Enquire Now</button>
            </div>

            </div>
            <div className="box">
                <img src={electronics} alt="" />
                <h1>Electronic Engineering</h1>
                <div className="info">

<h3>Entrance Exam : JEE Advanced</h3>
<h3>cutoff(2025) : 159 marks </h3>
<h3> total intake(seats) : 87</h3>
<h3>Highest Package(2025) : 23 lakh </h3>
<button onClick={(()=>navigate('/contact'))}>Enquire Now</button>
            </div>

            </div>
            <div className="box">
                <img src={electrical} alt="" />
                <h1>Electrical Engineering</h1>
                <div className="info">

<h3>Entrance Exam : JEE Advanced</h3>
<h3>cutoff(2025) : 144 marks </h3>
<h3> total intake(seats) : 87</h3>
<h3>Highest Package(2025) : 45 lakh </h3>
<button onClick={(()=>navigate('/contact'))}>Enquire Now</button>
            </div>

            </div>
            <div className="box">
                <img src={aerospace} alt="" />
                <h1>Aerospace Engineering</h1>
                <div className="info">

<h3>Entrance Exam : JEE Advanced</h3>
<h3>cutoff(2025) : 155 marks </h3>
<h3> total intake(seats) : 87</h3>
<h3>Highest Package(2025) : 1.2 lakh </h3>
<button onClick={(()=>navigate('/contact'))}>Enquire Now</button>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Btech;
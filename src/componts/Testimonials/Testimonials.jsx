import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
    const slider=useRef();
    let tx=0;
    const slideForward=()=>{
if(tx>-50){
    tx=tx-25;
}
slider.current.style.transform=`translateX(${tx}%)`

    }
    const slideBackward=()=>{
        if(tx<0){
    tx=tx+25;
}
slider.current.style.transform=`translateX(${tx}%)`

    }
  return (

    <div className='testimonials'>
<div className="testimonials-title">
    <h4>Testimonials</h4>
    <h1>what students says</h1>
</div>
<img src={next_icon} alt=""className='next-btn' onClick={slideForward}/>
<img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
<div className="slider">

    <ul ref={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                    <h3>Diksha sharma</h3>
                <span>
                    Dellhi
                 </span>
            </div>
            </div>
            <p>
"IIT Madras doesn't just grant degrees; it builds leaders. The culture of excellence and the 'Can-Do' spirit of the 
campus pushed me beyond my limits, making me the professional I am today."  i bndd bdsnd bkdfnbds bdnks bdss          </p>
            </div>
        </li>
<li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                    <h3>Kishor Rathod</h3>
                <span>
                    Uttar Pradesh
                 </span>
            </div>
            </div>
            <p>
                "Being a part of IIT Madras has been a life-changing experience. The world-class
                 faculty and the rigorous academic curriculum have not only sharpened my technical skills but also taught
                 me how to approach complex problems with a solution-oriented mindset."
            </p>
            </div>
        </li>

<li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                    <h3>yogita joshi</h3>
                <span>
                    Pune,Maharashtra
                 </span>
            </div>
            </div>
            <p>
"The research culture at IIT Madras is truly inspiring. With access to the IITM
 Research Park and state-of-the-art laboratories, I was able to turn my 
 theoretical ideas into a working prototype, 
helping me bridge the gap between classroom learning and industry needs."            </p>
            </div>
        </li>

        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                    <h3>shahrukh pathan</h3>
                <span>
                    Patna,bihar
                 </span>
            </div>
            </div>
            <p>
"Life at IITM is about more than just academics; it's about the vibrant community.
 From the deer-filled greenery of the campus to the late-night brainstorming sessions 
during Shaastra and Saarang, the bonds I've formed here are for a lifetime."            </p>
            </div>
        </li>
    </ul>
</div>



    </div>
  )

}

export default Testimonials













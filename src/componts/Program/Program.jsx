import React from 'react'
import './Program.css'
import program1 from '../../assets/program11.jpg'
import program2 from '../../assets/program2.png'
import program3 from '../../assets/program33.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import { useNavigate } from 'react-router-dom'
import Allprogram from '../Allprogram'

const Program = () => {
    const navigate=useNavigate();
  return (<>
    <div className='progrmas'>
        <div className="program-title"><h1>our programs</h1></div>
        <div className="program"  onClick={()=>navigate('/undergraduate')}>
            <img src={program2} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <p>Udergraduate Programs</p>
            </div>
        </div>
        <div className="program"  onClick={()=>navigate('/postgraduate')}>
            <img src={program1} alt="" />
             <div className="caption">
                <img src={program_icon_2} alt="" />
                <p>Postgraduate Programs</p>
            </div>
        </div>
        <div className="program" onClick={()=>navigate('/online')}>
            <img src={program3} alt="" className='program3'/>
             <div className="caption">
                <img src={program_icon_3} alt="" />
                <p>Online Programs</p>
            </div>

        </div>
        <br />
            <button className='see-program' onClick={()=>navigate('/allprogram')}>
                see our programs</button>

    </div>
  </>

  )
}

export default Program







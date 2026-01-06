import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/campus_video.mp4'
const VideoPlayer = () => {

// const player=useRef(null);
// const closeplayer=(e)=>{
//     if(e.target===player.current){
//         setplaystate(false);
//     }
// }

  return (
     <div className='videoplayer' 
     >

        <video src={video} autoPlay muted controls></video>
    </div>
    
  )
}

export default VideoPlayer
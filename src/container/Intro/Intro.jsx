import React, { useState } from 'react';
import { BsFillPlayFill,BsPauseFill } from 'react-icons/bs';
import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo,setPlayVideo]=useState(false)
  const vidRef=React.useRef();
  const handleVideo=()=>{
    setPlayVideo((prev)=>!prev)
    if(playVideo){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
  return(
  <div className='video'>
    <video src={meal} type="video/mp4" Loop controls={false} muted ref={vidRef}/>
    <div className='video-overlay flex__center'>
    <div className='video-overlay_circle flex__center' 
    onClick={handleVideo}>
      {playVideo 
      ? <BsPauseFill   color="#fff" size={30}/>
      :<BsFillPlayFill color="#fff"size={30} />}

    </div>
    </div>
  </div>
  )
};

export default Intro;

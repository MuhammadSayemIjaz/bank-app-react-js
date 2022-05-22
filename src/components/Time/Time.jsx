import React from "react";
import Clock from 'react-live-clock';

const Time = () => {
    
  return (
    <>
      <Clock format={'dddd , MMMM Do YYYY , HH:mm:ss a'} ticking={true}/>  
    </>
  )
}

export default Time
import React from 'react';
import abcam from './abcam.png';

const Title = () => {
  return (
    <div className="row" style={{padding: "5px", height: "50px"}}>
      <div className="col">
        <img src={abcam} alt="Abcam" style={{marginLeft: "10px;"}}/>
      </div>
    </div>
  )
}

export default Title;

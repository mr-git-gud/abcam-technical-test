import React from 'react';
import abcam from './abcam.png';


const Header = () => {
  return (
    <div className="row" style={{height: "50px", backgroundColor: "#717c7d", color: "#fff", padding: "0px" }}>
      <div className="col-sm" style={{ textAlign: "center", fontFamily: "Century Gothic, Arial, sans-serif", padding: "10px", backgroundColor: "#717c7d"}}>123 696000</div>
      <div className="col-sm" style={{ textAlign: "center", fontFamily: "Century Gothic, Arial, sans-serif", padding: "10px", backgroundColor: "#717c7d"}}>My Basket</div>
      <div className="col-sm" style={{ textAlign: "center", fontFamily: "Century Gothic, Arial, sans-serif", padding: "10px", backgroundColor: "#717c7d"}}>Contact Us</div>
      <div class="w-100"></div>
      <div className="col-sm" style={{ textAlign: "left", fontFamily: "Century Gothic, Arial, sans-serif", backgroundColor: "#fff", width: "100%"}}>
        <img src={abcam} alt="Abcam" style={{marginLeft: "10px"}}/>
      </div>
    </div>
  )
}

export default Header;

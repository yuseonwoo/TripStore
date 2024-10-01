import React from "react";
import {Link} from "react-router-dom";
import logohere from "../assets/images/logo.svg";

const SiteFooter = ()=>{
  return(
    <>
    <div className="ftrWrap">
      <footer>
        <h1 className="logo">
          <Link to = {"/"}><img src={logohere} alt=""/></Link>
        </h1>
        <div className="list">
          <div className="leftList">
            <h2>
              Company
            </h2> 
            <p>Careers</p>
            <p>Press</p>
            <p>Foundation</p>
            <p>Privacy</p>
          </div>
          <div className="rightList">
            <h2>Get in Touch</h2>
            <p>010.9087.1359</p>
            <p>tripstore@gmail.com</p>
          </div> 
        </div>
      </footer>
    </div>
    </>
  )
}

export default SiteFooter;
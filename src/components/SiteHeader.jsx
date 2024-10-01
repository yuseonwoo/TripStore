import React from "react";
import { Link } from "react-router-dom";
import logohere from "../assets/images/logo.svg";

const SiteHeader=()=>{
  return (
    <div className="hdrWrap">
      <header>
        <h1 className="logo">
          <Link to = {"/"}><img src={logohere} alt=""/></Link>
        </h1>
        <ul className="nav">
          <li><Link to ={"/Sub1"}>SubPage1</Link></li>
          <li><Link to ={"/Sub2"}>SubPage2</Link></li>
          <li><Link to ={"/Sub3"}>SubPage3</Link></li>
          <li><Link to ={"/Sub4"}>SubPage4</Link></li>
        </ul>
      </header>
    </div>
  )
}

export default SiteHeader;
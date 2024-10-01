import React from "react";
import SiteBanner from "../components/SiteBanner";
// import Header from "../components/Header";
import PurposeOfTrip from "../components/index/PurposeOfTrip";
import "../styles/all.css";
import Process from "../components/index/Process";
import Main from "../components/index/Main";
import Welcome from "../components/index/Welcome";

// 셋 중에 뭘써도 됨 
// function Index(){}
//const Index=function(){}
const Index=()=>{
  return(
    <>
      <Main/>
      <PurposeOfTrip/>
      <Welcome/>
      <Process/>
      {/* <div className="content ct1">
        <Header 
          h3="What travel do you want?" 
          h6="" 
          p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse vitae orci at eros eleifend ultricies ut quis turpis."
        />
        <section></section>
      </div> */}
      <SiteBanner/>
    </>
    
  );
}

export default Index;

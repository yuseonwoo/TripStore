import React from "react";
import PurposeOfTrip from "../components/index/PurposeOfTrip";
import Process from "../components/index/Process";
import IndexMain from "../components/index/IndexMain";
import Welcome from "../components/index/Welcome";
import IndexBanner from "../components/index/IndexBanner"
// 셋 중에 뭘써도 됨 
// function Index(){}
//const Index=function(){}
const Index=()=>{
  return(
    <>
      <IndexMain />
      <PurposeOfTrip/>
      <Welcome/>
      <Process/>
      <IndexBanner/>
    </>
    
  );
}

export default Index;

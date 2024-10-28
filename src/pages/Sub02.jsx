import React from "react";
import Sub2Main from "../components/sub2/Sub2Main";
import Sub2Banner from "../components/sub2/Sub2Banner";
import FourPicture from "../components/sub2/FourPicture";
import Traffics from "../components/sub2/Traffics";
import Sights from "../components/sub2/Sights";
import Activities from "../components/sub2/Activities";
import RoomSelect from "../components/sub2/RoomSelect";




const Sub02 = ()=>{
  return (
    <>
      <Sub2Main/>
      <FourPicture/>
      <Traffics/>
      <Sights/>
      <Activities/>
      <RoomSelect/>
      <Sub2Banner/>
    </>
  );
}

export default Sub02;
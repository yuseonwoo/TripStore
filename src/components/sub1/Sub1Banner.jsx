import React from "react";
import '../../styles/sub1/sub1.banner.scss'
import { HiChevronDoubleDown } from "react-icons/hi";

const Sub1Banner = () => {
  return(
    <>
      <div className="sub1Banner">
        <div className="texts">
          <HiChevronDoubleDown className="icon"/>
          <h3>
            여행지 추천이 완료되었어요!
            <br/>다음 단계로 이동할까요?
          </h3>
        </div>
        <div className="btns">
          <button>네 좋아요!</button>
          <button>다시 추천해주세요</button>
        </div>
      </div>
    </>
  )
}


export default Sub1Banner;
import React from "react";
import '../../styles/index/main.scss'
import { RxDoubleArrowDown } from "react-icons/rx";
const Main = () => {
  return (
    <>
      <div className="mnWrap">
        <main>
          <div className="texts">
            <h2>
              TripStore
              <br/>Your Journey
            </h2>
            <p>
              당신의 여정의 시작과 끝까지.
              <br/>단 하나로 끝내는 우리는 트립스토어
            </p>
          </div>
          <div className="btn">
            <button>
              <RxDoubleArrowDown/>
            </button>
          </div>
        </main>  
      </div>
    </>
  )
}

export default Main;
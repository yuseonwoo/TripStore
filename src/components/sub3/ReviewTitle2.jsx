import React from "react";
import '../../styles/sub3/reviewtitle2.scss';
import { TiHeartOutline } from "react-icons/ti";
import { TiHomeOutline } from "react-icons/ti";




const ReviewTitle2 = () => {
  return(
    <>
      <section className="content reviewtitle2">
        <div className="main-content">
          <div className="left-content">
            <div className="image"></div>
          </div>
          <div className="right-content">
            <div className="texts">
              <h2>Review Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br/>elit.Suspendisse vitae orci at eros eleifend ultricies 
                <br/>ut quis turpis.Ut cursus nibh vel turpis consectetur,
                <br/>a suscipit sem blandit. Nulla ut tristique purus.
              </p>
              <h4>#서울숲카페 #인생삿스팟 #서울핫플</h4>
              <div className="btns">
                <button className="TiHeartOutline">
                  <TiHeartOutline />
                  <span className="button-text">좋아요</span>
                </button>
                <button className="TiHomeOutline">
                  <TiHomeOutline />
                  <span className="button-text">에디터홈 바로가기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewTitle2;
import React from "react";
import '../../styles/sub3/travlerstory1.scss';
import { TiHeartOutline } from "react-icons/ti";
import { TiHomeOutline } from "react-icons/ti";


const TravelerStory1 = () => {
  return(
    <>
      <div className="content travlerstory1">
        <header>
          <hr />
          <h2>
            Traveler’s Story
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse vitae orci at eros 
            <br/>eleifend ultricies ut quis turpis.Ut cursus nibh vel turpis consectetur, a suscipit sem 
          </p>
        </header>
        <section className="main-content">
          <div className="left-content">
            <div className="texts">
              <h2>
                Review Title
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                <br/>elit.Suspendisse vitae orci at eros eleifend ultricies 
                <br/>ut quis turpis.Ut cursus nibh vel turpis consectetur,
                <br/>a suscipit sem blandit. Nulla ut tristique purus.
              </p>
              <h4>
                #서울숲카페 #인생삿스팟 #서울핫플
              </h4>
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
          <div className="right-content">
            <div className="image"></div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TravelerStory1;
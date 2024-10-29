import React from "react";
import '../../styles/sub4/traveldestination.scss';


const TravelDestination = () => {
  return(
    <>
      <div className="content traveldestination">
        <section>
          <div className="main-content">
            <div className="left-content">
              <div className="image"></div>
            </div>
            <div className="right-content">
              <div className="texts">
                <hr />
                <h2>
                  Your Travel Destination
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                  <br/>elit.Suspendisse vitae orci at eros eleifend ultricies ut
                  <br/>quis turpis.Ut cursus nibh vel turpis consectetur, 
                  <br/>a suscipit sem blandit. Nulla ut tristique purus. In 
                  <br/>scelerisque feugiat est ac auctor. Duis sed nulla sapien.
                  <br/>Vestibulum in ipsum eu arcu efficitur pretium. 
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing 
                  <br/>elit.Suspendisse vitae orci at eros eleifend ultricies ut
                  <br/>quis turpis.Ut cursus nibh vel turpis consectetur, 
                  <br/>a suscipit sem blandit. Nulla ut tristique purus.
                </p>
                <h4>3박4일 일정</h4>
                <h3>
                  TOTAL 500,000원
                </h3>
                <div className="btn">
                  <button>PAYMENT</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
} 


export default TravelDestination;
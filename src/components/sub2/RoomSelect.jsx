import React from "react";
import '../../styles/sub2/roomselect.scss'; 

const RoomSelect = () => {
  return(
    <>
      <div className="content roomselect">
        <header>
          <div className="texts">
            <hr />
            <h2>
              Room Select
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </header>
        <section className="main-content">
          <div className="left-panel">
            <div className="image">
              <div className="texts">
                <h3>Hotel & Motel</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>예약 현황 : 70%</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  <br />adipiscing elit. Suspendisse vitae orci at eros
                  <br />eleifend ultricies ut quis turpis. Ut cursus nibh
                  <br />vel turpis consectetur, a suscipit sem.
                </p>
              </div>
            </div>
          </div>

          <div className="right-panel">
            <article className="glamping">
              <div className="image i1"></div>
              <div className="texts">
                <h3>Glamping</h3>
                <p>Lorem, ipsum dolor sit amet.</p>
                <p>예약현황 : 70%</p>
              </div>
            </article>

            <article className="guesthouse">
              <div className="image i2"></div>
              <div className="texts">
                <h3>Guest House</h3>
                <p>Lorem, ipsum dolor sit amet.</p>
                <p>예약현황 : 70%</p>
              </div>
            </article>

            <article className="pension">
              <div className="image i3"></div>
              <div className="texts">
                <h3>Pension</h3>
                <p>Lorem, ipsum dolor sit amet.</p>
                <p>예약현황 : 70%</p>
              </div>
            </article>

            <article className="rentalhouse">
              <div className="image i4"></div>
              <div className="texts">
                <h3>Rental House</h3>
                <p>Lorem, ipsum dolor sit amet.</p>
                <p>예약현황 : 70%</p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  )
}


export default RoomSelect;
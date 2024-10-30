import React from "react";
import '../../styles/sub4/schedule.scss'


const Schedule = () =>{
  return(
    <>
      <div className="content schedule">
        <header>
          <hr />
          <h2>Schedule</h2>
        </header>
        <section>
          <div className="schedule">
            <div className="image i1"></div>
            <div className="line"></div>
          </div>
          <div className="schedule">
            <div className="image i2"></div>
            <div className="line"></div>
          </div>
          <div className="schedule">
            <div className="image i3"></div>
            <div className="line"></div>
          </div>
          <div className="schedule">
            <div className="image i4"></div>
          </div>
        </section>          
      </div>
    </>
  )
}

export default Schedule;
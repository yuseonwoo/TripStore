import React from "react";
import '../../styles/sub4/adventurecontent.scss'

const AdventureContent = () => {
  return(
    <>
      <div className="content adventurecontent">
        <section>
          <div className="title">
            <div className="texts">
              <hr />
              <h2>
                Adventure
                <br/>Content
              </h2>
              <p>eleifend ultricies ut quis turpis.Ut cursus</p>
            </div>
          </div>
          <article>
            <div className="texts">
              <h2>01</h2>
              <h3>Adventure Title</h3>
              <p>
                eleifend ultricies ut quis turpis.Ut cursus
                <br/>eleifend ultricies ut quis turpis.Ut cursus  
              </p>
            </div>
            <div className="image i1"></div>
          </article>
          <article>
            <div className="texts">
              <h2>02</h2>
              <h3>Adventure Title</h3>
              <p>
                eleifend ultricies ut quis turpis.Ut cursus
                <br/>eleifend ultricies ut quis turpis.Ut cursus  
              </p>
            </div>
            <div className="image i2"></div>
          </article>
          <article>
            <div className="texts">
              <h2>03</h2>
              <h3>Adventure Title</h3>
              <p>
                eleifend ultricies ut quis turpis.Ut cursus
                <br/>eleifend ultricies ut quis turpis.Ut cursus  
              </p>
            </div>
            <div className="image i3"></div>
          </article>
        </section>
      </div>
    </>
  )
}


export default AdventureContent;
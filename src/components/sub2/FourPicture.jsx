import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import '../../styles/sub2/fourpicture.scss'

const FourPicture = () => {
  return(
    <>
      <div className="content fourpic">
        <section>
          <article>
            <div className="image i1">
              <div className="texts">
                <h3>Traffics</h3>
                <button>
                  <BiChevronsRight />
                </button>
              </div>
            </div>
          </article>
          <article>
            <div className="image i2">
              <div className="texts">
                <h3>Rooms</h3>
                <button>
                  <BiChevronsRight />
                </button>
              </div>
            </div>
          </article>
          <article>
            <div className="image i3">
              <div className="texts">
                <h3>Sights</h3>
                <button>
                  <BiChevronsRight />
                </button>
              </div>
            </div>
          </article>
          <article>
            <div className="image i4">
              <div className="texts">
                <h3>Activities</h3>
                <button>
                  <BiChevronsRight />
                </button>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  )
}

export default FourPicture;
import React,{Component} from "react";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import '../../styles/sub2/activities.scss';
import activities from '../../datas/sub2/activities.json'

class Activities extends Component{
  componentDidMount(){
    console.log('activities 마운트 됨')
  }
  render(){
    return(
      <div className="content activities">
        <header>
          <hr />
          <h2>Activities</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <br/>Suspendisse vitae orci at eros eleifend ultricies ut quis turpis.
          </p>
        </header>
        <section>
          <div className="imageWrap">
            <div className="imageBox">
            {activities.map((data,i)=>{
              return(
                <article className={data.class} key={i}>
                <div className={`image i${i + 1}`}></div>
                <div className="texts">
                <h3>{i+1}Step</h3>
                <p>{data.title}</p>
                <ul>
                  {data.list[0].listItem.map((content, index)=>{
                  return(
                    <li key={index}>{content}</li>
                  );
                })}
                </ul>
                </div>
              </article>
              )
            })
            }
            </div>
          </div>
          <div className="buttonBox">
            <button className="btPrev">
              <HiArrowCircleLeft />
            </button>
            <button className="btNext">
              <HiArrowCircleRight />
            </button>
          </div>
        </section>
      </div>
    )
  }
}

export default Activities;

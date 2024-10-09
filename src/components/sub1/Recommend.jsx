import React,{Component} from "react";
//import Header from "../Header";
import '../../styles/sub1/recommend.scss'
import '../../styles/common.scss';
import recommend from '../../datas/sub1/recommend.json'

class Recommend extends Component{
  // Mount가 실행 된 후에 컴포넌트 실행시킨다
  componentDidMount(){
    console.log('컨텐츠1 이 마운트되었습니다.');
  }
  render(){
    return(
      <div className="content recommend">
        <header>
          <div className="texts">
            <hr />
            <h2>Recommended tourist</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </header>
        <section>
          {recommend.map((data,i)=>{
            return(
              <article className={data.class} key={i}>
                <div className={`image i${i + 1}`}>
                  <div className="texts">
                    <div className="textBoxWrapper">
                      <div className="textBox">
                        <div className={`colorBox c${i + 1}`}></div>
                        <h2>{i+1}Day</h2>
                        <h4>{data.title}</h4>
                        <ul>
                          {data.list[0].listItem.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </section>
      </div>
    )
  }
  
}

export default Recommend;
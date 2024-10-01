import React,{Component} from "react";
// import Header from "../Header";
import process from '../../datas/index/process.json'
import '../../styles/index/ct3.scss'
class Process extends Component{

  componentDidMount (){
    console.log('컴텐츠3 이 마운트 되었습니다.');
  }
  render(){
    return (
      <div className="content Process">
        <header>
          <div className="texts">
            <hr />
            <h2>Tripstore process</h2>
            <p>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. </p>
          </div>
        </header>
        <section>
          {process.map((data, i)=>{
            return(
              <article className={data.class}>
                <div className={`image i${i + 1}`}></div>
                <div className="texts">
                <h3>{i+1}Step</h3>
                <h4>{data.title}</h4>
                <ul>{data.content.map((content, index)=>{
                  return(
                    <li key={index}>{content}</li>
                  );
                })}
                </ul>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Process;
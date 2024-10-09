import React, {Component} from "react";
import '../../styles/index/purposeoftrip.scss'
import purpose from'../../datas/index/purpose.json'
// 클래스형 컴포넌트 (제이쿼리를 사용하기 위해서 한것)
// 함수형 컴포넌트와 클래스형 컴포넌트의 차이
// 클래스형 컴포넌트는 컴포넌트의 생명주기를 제어할 수 있다.
// 생명주기란? 탄생, 활동, 죽음 까지의 순환구조를 의미한다.

// 클래스형 컴포넌트
class PurposeOfTrip extends Component{
  // Mount가 실행 된 후에 컴포넌트 실행시킨다
  componentDidMount(){
    console.log('컨텐츠1 이 마운트되었습니다.');
  } 
  render(){
    return(
      <div className={"content PurposeOfTrip"}>
        <header>
          <h4>What travel do you want?</h4>
          <h2>Purpose of Trip</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <br/>Suspendisse vitae orci at eros eleifend ultricies ut quis turpis.
          </p>
        </header>
        <section>
          {purpose.map((data, i) => {
            return (
              <article className={data.class} key={i}>
                <div className={`image i${i + 1}`}></div>
                <div className="texts">
                  <h2>{data.class}</h2>
                  <h4>{data.title}</h4>
                  <ul>
                    {data.list[0].listItem.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
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
export default PurposeOfTrip;
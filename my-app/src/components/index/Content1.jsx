import React, {Component} from "react";
import Header from "../Header";
import '../../styles/index/ct1.scss'
// 클래스형 컴포넌트 (제이쿼리를 사용하기 위해서 한것)
// 함수형 컴포넌트와 클래스형 컴포넌트의 차이
// 클래스형 컴포넌트는 컴포넌트의 생명주기를 제어할 수 있다.
// 생명주기란? 탄생, 활동, 죽음 까지의 순환구조를 의미한다.

// 클래스형 컴포넌트
class Content1 extends Component{
  // Mount가 실행 된 후에 컴포넌트 실행시킨다
  componentDidMount(){
    console.log('컨텐츠1 이 마운트되었습니다.');
  } 
  render(){
    return(
      <div className={"content ct1"}>
        <Header h3="컨텐츠1" p="제목에 대한 설명"/>
        <section>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
          <article></article>
        </section>
      </div>
    );
  }
}
export default Content1;
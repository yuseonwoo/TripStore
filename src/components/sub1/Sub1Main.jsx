import React from "react";
import '../../styles/sub1/sub1.main.scss'

const Sub1Main = () => {
  return (
    <div className="mnWrap sub1Main">
      <main>
        <header>
          <hr />
          <h2>
            Hello User!
            <br/>여행을 추천해드릴게요!
          </h2>
        </header>
        <div className="genderAge">
          <div className="gender">
            <h4>성별을 알려주세요</h4>
            <div className="form">
              <span>
                <input type="radio" name="gender" id="male" /><label htmlFor="male">남성</label>
              </span> 
              <span>
                <input type="radio" name="gender" id="female"/><label htmlFor="female">여성</label>
              </span>
            </div>
          </div>
          <div className="age">
            <h4>나이를 알려주세요</h4>
            <div className="form">
              <span>
                <input type="radio" name="age" id="ten" /><label htmlFor="ten">10대~20대</label>
              </span>
              <span>
                <input type="radio" name="age" id="twenty" /><label htmlFor="twenty">20대~40대</label>
              </span>
              <span>
                <input type="radio" name="age" id="forty" /><label htmlFor="forty">40대~60대</label>
              </span>
              <span>
                <input type="radio" name="age" id="etc" /><label htmlFor="etc">그외</label>
              </span>
            </div>
          </div>
        </div>
        <div className="selectBoxContainer">
          <div className="selectBox s1">
            <div className="icon"></div>
            <select name="" id="">
              <option value="">가고 싶은 지역이 있나요?</option>
              <option value="">선택1</option>
              <option value="">선택2</option>
              <option value="">선택3</option>
            </select>
          </div>
          <div className="selectBox s2">
          <div className="icon"></div>
            <select name="" id="">
              <option value="">얼마 동안 여행하실 건가요?</option>
              <option value="">선택1</option>
              <option value="">선택2</option>
              <option value="">선택3</option>
            </select>
          </div>
          <div className="selectBox s3">
          <div className="icon"></div>
            <select name="" id="">
              <option value="">몇명이 여행하나요?</option>
              <option value="">선택1</option>
              <option value="">선택2</option>
              <option value="">선택3</option>
            </select>
          </div>
          <div className="selectBox s4">
          <div className="icon"></div>
            <select name="" id="">
              <option value="">어떤 여행을 하고 싶나요?</option>
              <option value="">선택1</option>
              <option value="">선택2</option>
              <option value="">선택3</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Sub1Main;       
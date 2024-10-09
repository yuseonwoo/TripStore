import React,{Component} from "react";
import $ from "jquery"
import '../../styles/sub5.animate.scss'

class Animate extends Component{
  componentDidMount(){
    console.log('마운트가 완료되었습니다.');
    $('h1').css('background-color', '#ff0000');
    // 선택기.hide() => 선택기를 숨긴다.
    // 선택기.show() => 선택기를 보여준다.
    
    // 선택기.slideUp() => 선택기를 숨기는데 높이값을 0 으로 조정하며 숨긴다.
    // 선택기.slideDown() => 선택기의 높이값을 원래대로 회복하면서 보여준다.
    // 선택기.fadeIn() => 숨겨진 요소를 나타나게 한다. 
    // 선택기.fadeOut() => 드러난 요소를 사라지게 한다.
    
    // 선택기.animate( {속성:값,속성:값}, 지속시간 ,콜백함수(==컴플리트 함수) ) => 적용된 속성을 해당 값까지 애니메이션 시켜준다. 
    $('h1').animate({height:200},2000, ()=>{
      $('h1').css('background-color','#0000FF');
    });
    // buttonBox의 버튼 2을 클릭했을때 기능이 실행됩니다.
    // 기능은 이미지 박스의 ml 값이 -100% 만큼 이동합니다.
    // bt1 =>-100*0 bt2 => -100*1 bt2=> 200
    // this키워드 : 이벤트가 적용되는 대상이다.

    const $animate = $('.animate'),
          $animate_bt = $animate.find('button'),
          $animate_imgBox = $animate.find('.imageBox');
    let i = 0,      
        j = 0;
    j = $animate_imgBox.find('.image:last').index()+1;
    $animate_imgBox.css({width:100*j + '%' });
    $animate_imgBox.find('.image').css({width:100/j + '%'});



    // on 메소드는 여러이벤트를 객체에 적용할 때 사용한다.      
    $animate_bt.on('click', function(){
      i = $(this).index();
      $animate_imgBox.animate({left:-100 * i +'%'});
      console.log(i);
    });
  }
  render(){
    return(
      <>
      <h1>마운트 되었습니다.</h1>
      <div className="content animate">
        <section>
          <div className="imageBox">
            <div className="image i1">Image01</div>
            <div className="image i2">Image02</div>
            <div className="image i3">Image03</div>
            <div className="image i4">Image04</div>
            <div className="image i5">Image05</div>
            <div className="image i6">Image06</div>
          </div>
          <div className="buttonBox">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
        </section>
      </div>
      </>
    )
  }
}

export default Animate;
import React,{Component} from "react";
import '../../styles/sub5.carousel2.scss'
import $ from "jquery";
const context = [
      {imgTitle:"Image 01"},
      {imgTitle:"Image 02"},
      {imgTitle:"Image 03"},
      {imgTitle:"Image 04"},
      {imgTitle:"Image 05"},
      {imgTitle:"Image 06"}
]

class Carousel2 extends Component{
  componentDidMount(){
    const $carousel2 = $('.carousel2'),
          $carousel2_imgbox = $carousel2.find('.imageBox'),
          $carousel2_btPrev = $carousel2.find('.btPrev'),
          $carousel2_btNext = $carousel2.find('.btNext');
          
    $carousel2_imgbox.find('.image:last').prependTo($carousel2_imgbox);
    $carousel2_imgbox.css({left: -100 / 3 + '%'});

    $carousel2_btNext.on('click', function(){
      $carousel2_imgbox.animate({left:'-66.66%'}, function(){
        $carousel2_imgbox.find('.image:first').appendTo($carousel2_imgbox);
        $carousel2_imgbox.css({left:'-33.33%'});
      })

    });

    $carousel2_btPrev.on('click',function(){
      $carousel2_imgbox.animate({left:0},function(){
        $carousel2_imgbox.find('.image:last').prependTo($carousel2_imgbox);
        $carousel2_imgbox.css({left: -100 / 3 + '%'});
    
      })
      });
  }
  render(){
    return(
      <div className="content carousel2">
        <section>
          <div className="imageWrap">
            <div className="imageBox">
            {context.map((data,i)=>{
              return (
                <div className={`image i${i+1}`}>{data.imgTitle}</div>
              )
            })
              
            }
            </div>
          </div>
          <div className="buttonBox">
            <button className="btPrev">1</button>
            <button className="btNext">2</button>
          </div>
        </section>
      </div>
    )
  }
}

export default Carousel2;

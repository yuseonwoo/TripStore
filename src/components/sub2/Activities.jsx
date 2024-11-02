import React, { Component } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import $ from "jquery";
import '../../styles/sub2/activities.scss';
import activities from '../../datas/sub2/activities.json';

class Activities extends Component {
  componentDidMount() {
    const $activities = $('.activities'),
          $activities_imgbox = $activities.find('.imageBox'),
          $activities_btPrev = $activities.find('.btPrev'),
          $activities_btNext = $activities.find('.btNext');
          
    $activities_imgbox.find('.image:last').prependTo($activities_imgbox);
    $activities_imgbox.css({left: -100 / 3 + '%'});
    
    $activities_btNext.on('click', function(){
      $activities_imgbox.animate({left:'-66.66%'}, function(){
        $activities_imgbox.find('.image:first').appendTo($activities_imgbox);
        $activities_imgbox.css({left:'-33.33%'});
      })
    });

    $activities_btPrev.on('click',function(){
      $activities_imgbox.animate({left:0},function(){
        $activities_imgbox.find('.image:last').prependTo($activities_imgbox);
        $activities_imgbox.css({left: -100 / 3 + '%'});
      })
    })
  }
  render() {
    return (
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
              {activities.map((data, i) => (
                <article className={data.class} key={i}>
                  <div className={`image i${i + 1}`}>
                    <div className="texts">
                      <h3>{i+1}Day</h3>
                      <p>{data.title}</p>
                      <ul>
                        {data.list[0].listItem.map((content, index) => (
                          <li key={index}>{content}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
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
    );
  }
}

export default Activities;

import React,{Component} from "react";
import '../../styles/index/welcome.scss'

class Welcome extends Component{
  componentDidMount(){
    console.log('컨텐츠2가 마운트 되었습니다.');
  }
  render(){
    return (
      <div className="content Welcome">
        <header>
          <div className="textbox">
            <hr />
            <h2>Welcome to our world !</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse vitae orci at eros 
              <br/>eleifend ultricies ut quis turpis.Ut cursus nibh vel turpis consectetur, a suscipit sem 
              <br/>blandit. Nulla ut tristique purus. In scelerisque feugiat est ac auctor. Duis sed nulla sapien.
              <br/>Vestibulum in ipsum eu arcu efficitur pretium. 
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse vitae orci at eros 
              <br/>eleifend ultricies ut quis turpis.Ut cursus nibh vel turpis consectetur, a suscipit sem 
              <br/>blandit. Nulla ut tristique purus. In scelerisque feugiat est ac auctor. Duis sed nulla sapien.
              <br/>Vestibulum in ipsum eu arcu efficitur pretium. 
            </p>
          </div>
          <div className="image">
          </div>
        </header>
      </div>
    )
  }
}

export default Welcome;
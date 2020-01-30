import React, {Component} from 'react';
import "./App.css"
import ImagePicture from "./components/ImagePicture"

class App extends Component{
  constructor(){
    super()
      
  }
render(){
  
  // let pic = {
  //   url: "https://httpstatusdogs.com/409-conflict"
  // }
 
  return ( 
    <div className = "App">
      <ImagePicture/>
      <ImagePicture url ={"https://httpstatusdogs.com/img/405.jpg"} />
      </div>
)

    // return (
    //   <div>
    //   <img src={pic} style={{width: 100, height: 100}}></img>
    //   </div>
    // )
}
  


}
export default App;

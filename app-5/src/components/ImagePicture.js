import React, {Component} from 'react';



//     render(){
//             return
//                 <div>
//                    <img src ="httphttps://httpstatusdogs.com/409-conflicts://via.placeholder.com/150
// C/O https://placeholder.com"></img> 
//                 </div>
        
//     }


 class ImagePicture extends Component {
    constructor(props){
        super(props)
          
      }
    render() {
      return (
        <div>
          <img src={this.props.url} />
          <div> PICTURE TEST</div>
        </div>
      )
    }
  }


 export default ImagePicture;
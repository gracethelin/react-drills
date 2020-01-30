import React, {Component} from 'react';
import "./App.css"

class App extends Component{
  constructor(props){
  super(props)

  this.state = {
    userInput: "",
    list: ["Grace", "Abby", "Lilly", "Ice Cream"],
    filteredList: []
  }
  }


  handlerChange = (value) =>{
   
    this.setState({
      userInput: value
    })
// let arr =  this.state.list.filter(e => {
//    return e.includes(this.state.userInput)
//   })
//    console.log(arr)
//   this.setState({filteredList: arr})
  


}


  render(){

let arr =  this.state.list.filter(e => {
  return e.includes(this.state.userInput)
 })
  
 
    return (
      <div className="App">
        <h2>App 3</h2>
        <input onChange={(event) => this.handlerChange(event.target.value)}></input>
        <div>{arr.map(e=><h2>{e}</h2>)}</div>
        <h2></h2>
      </div>
    )
  }
}






export default App;

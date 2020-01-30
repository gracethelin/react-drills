import React, { Component } from 'react';
import "./App.css"

class App extends Component{
  constructor(props){
  super(props)

  this.state = {
    userInput: ""

  }
  }

  handleChange = (value) =>{
    this.setState({
      userInput: value
    })
  }

  render(){
    return (
     <div className = "App">
       <h4>App 1</h4>
       <input onChange={(event) => this.handleChange(event.target.value)}></input>
      <div>{this.state.userInput}</div>
    </div>
    )

  }


}
export default App;

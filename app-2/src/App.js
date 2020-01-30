import React, {Component} from 'react';
import "./App.css"


class App extends Component{
  constructor(props){
  super(props)

  this.state = {
    userInput: ["Grace", "Abby", "Lilly", "Ice Cream"]

  }
}

render(){
  return (
    <div className="App">
      {this.state.userInput.map((e, i) =><h2>{e}</h2>)}
      <div></div>
    </div>
  )
}
}

export default App;
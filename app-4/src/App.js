import React, {Component} from 'react';
import "./App.css"

class App extends Component{
  constructor(props){
  super(props)
  this.state = {
    username: "",
    password: "",
  }
  }

  handlerChange = (value) =>{
   
    this.setState({
      username: value,
    })
  }

  handlerChange2 = (value) =>{
   
    this.setState({
      password: value
    })
  }

  logins = () => {
      alert(`Username: ${this.state.username} Password: ${this.state.username}`)

  }


  render(){

    return(
      
      <div className = "App">
        <input onChange={(event) => this.handlerChange(event.target.value)}></input>
      <input onChange={(event) => this.handlerChange2(event.target.value)}></input>
      <button onClick={this.logins}> Click</button>
      </div>
    )
  }

}
export default App;

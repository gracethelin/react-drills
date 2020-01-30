
import React, {Component} from 'react'
import NewTask from "./Components/NewTask"
import List from "./Components/List"
import Todo from "./Components/List"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask = (task) => {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  countHandler() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>Clicked {this.state.count} times</p>
        <button onClick={() => this.countHandler()}>
          Click me
        </button>
      </div>
    );
  }

}

export default App

import React, { Component } from 'react';

class HooksExample2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.addCount = this.addCount.bind(this)
  }
  addCount() {
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
  }
  componentDidMount() {
    console.log("Component did mount" + this.state.count)
  }
  componentDidUpdate() {
    console.log("Component did update" + this.state.count)
  }
  render() { 
    return (
      <div>
        <p>You have clicked {this.state.count} times.</p>
        <button onClick={this.addCount}>Click me</button>
      </div>
    );
  }
}
 
export default HooksExample2;

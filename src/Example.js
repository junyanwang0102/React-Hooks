import React, { Component } from 'react';

class Example extends Component {
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

  render() { 
    return (
      <div>
        <p>You have clicked {this.state.count} times.</p>
        <button onClick={this.addCount}>Click me</button>
      </div>
    );
  }
}
 
export default Example;
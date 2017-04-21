import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div className='counter'>
        <h1>Count:  {this.state.count}</h1>
        <button type='button' onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
};

export default Counter;

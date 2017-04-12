import React, { Component } from 'react';

class Counter extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.count !== this.props.count;
  }

  render() {
    console.log('count::render()');
    return (
      <span>{this.props.count}</span>
    );
  }
}

export default Counter;

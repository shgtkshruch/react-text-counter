import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <textarea defaultValue={this.props.text} />
    );
  }
}

export default App;

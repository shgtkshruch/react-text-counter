import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this._textChange = this._textChange.bind(this);

    this.state = {
      text: props.text
    };
  }

  static defaultProps = {
    text: ''
  }

  _textChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    let counter = null;
    if (this.state.text.length > 0) {
      counter = (
        <p>
          <Counter count={this.state.text.length} />
        </p>
      );
    }
    return (
      <div>
        <textarea value={this.state.text} onChange={this._textChange} />
        {counter}
      </div>
    );
  }
}

export default App;

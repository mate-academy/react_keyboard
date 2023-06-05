import React, { Component } from 'react';

export class Appmessage extends Component {
  state = {
    key: '',
    message: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyboardHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyboardHandler);
  }

  keyboardHandler = (event: KeyboardEvent): void => {
    this.setState({ key: `[${event.key}]`, message: 'The last pressed key is' });
  };

  render() {
    return <p className="App__message">{`${this.state.message} ${this.state.key}`}</p>;
  }
}

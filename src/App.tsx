import React, { Component } from 'react';

interface State {
  pressedKey: string;
}

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet', // Mensagem inicial
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is ${event.key}`,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.pressedKey}</h1>
      </div>
    );
  }
}

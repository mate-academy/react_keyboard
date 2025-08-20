import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  handleKeyChange = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyChange);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyChange);
  }

  render() {
    return this.state.pressedKey ? (
      <p className="App__message">
        The last pressed key is [{this.state.pressedKey}]
      </p>
    ) : (
      <p className="App__message">Nothing was pressed yet</p>
    );
  }
}

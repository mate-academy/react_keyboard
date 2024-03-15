import React from 'react';

type State = {
  pressedKey: string;
  handleMessage: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
    handleMessage: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key }, () => {
      this.handleMessage();
    });
  };

  handleMessage() {
    if (this.state.pressedKey !== '') {
      this.setState({
        handleMessage: `The last pressed key is [${this.state.pressedKey}]`,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.handleMessage}</p>
      </div>
    );
  }
}

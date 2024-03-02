import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    this.handleKeyPress();
  }

  componentWillUnmount(): void {
    this.hendlerRemoveListener();
  }

  hendlerRemoveListener = () => {
    document.removeEventListener('keyup', () => {
      this.setState({ pressedKey: '' });
    });
  };

  handleKeyPress = () => {
    document.addEventListener('keyup', event => {
      this.setState({ pressedKey: event.key });
    });
  };

  render() {
    const { pressedKey } = this.state;
    const actualMassage = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : `Nothing was pressed yet`;

    return (
      <div className="App">
        <p className="App__message">{actualMassage}</p>
      </div>
    );
  }
}

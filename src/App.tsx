import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.showLetter);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.showLetter);
  }

  showLetter = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is ${event.key}` });
  };

  render() {
    return (
      <div className="App">
        {this.state.pressedKey === ''
          ? (
            <p className="App__message"> Nothing was pressed yet </p>)
          : (
            <p className="App__message">{this.state.pressedKey}</p>
          )}
      </div>
    );
  }
}

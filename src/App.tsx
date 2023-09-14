import React from 'react';

type AppState = {
  pressedKey: string;
};

export class App extends React.Component {
  state: AppState = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (e: KeyboardEvent) => {
    this.setState((prev) => {
      return {
        ...prev,
        pressedKey: e.key,
      };
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.pressedKey && <p className="App__message">{`The last pressed key is [${this.state.pressedKey}]`}</p>}
        {!this.state.pressedKey
          && <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}

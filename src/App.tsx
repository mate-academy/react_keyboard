import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { pressedKey: pressedKey } = this.state;

    return pressedKey
      ? (
      <div className="App">
        <p className="App__message">The last pressed key is [{pressedKey}]</p>
      </div>
      )
      : (
      <div className="App">
        <p className="App__message">Nothing was pressed yet</p>
      </div>
    );
  }
}

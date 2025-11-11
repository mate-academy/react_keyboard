import React from 'react';

type AppState = {
  pressedKey: string;
};

export class App extends React.Component<{}, AppState> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  keyChange = (event: KeyboardEvent) => {
      this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
    }

  componentDidMount() {
    document.addEventListener('keyup', this.keyChange);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyChange);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

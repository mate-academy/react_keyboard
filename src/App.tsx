import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component {
  state: State = {
    pressedKey: null,
  };

  handleKeybordPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeybordPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeybordPress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}

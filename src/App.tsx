import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: false,
    key: '',
  };

  handleKeybordPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: true, key: event.key });
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
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

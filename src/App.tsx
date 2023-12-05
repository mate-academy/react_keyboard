import React from 'react';

export class App extends React.PureComponent {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardEvent);
  }

  handleKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        {this.state.pressedKey
          ? <p className="App__message">{`The last pressed key is [${this.state.pressedKey}]`}</p>
          : <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}

import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  handleKeyEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyEvent);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

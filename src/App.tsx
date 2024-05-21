import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  handleKayPress(event: KeyboardEvent) {
    this.setState({ pressedKey: event.key });
  }

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKayPress(event);
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.handleKayPress(event);
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey ? (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

import React from 'react';
type State = { pressedKey: string };
export class App extends React.Component<{}, State> {
  state = { pressedKey: '' };
  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };
  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }
  render() {
    return (
      <div className="App">
        {!this.state.pressedKey && (
          <p className="App__message">Nothing was pressed yet</p>
        )}
        {this.state.pressedKey && (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        )}
      </div>
    );
  }
}

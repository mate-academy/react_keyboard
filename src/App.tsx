import React from 'react';

export class App extends React.Component {
  state = { pressedKey: '' };
  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', () => {});
  }
  render() {
    return (
      <div className="App">
        {!this.state.pressedKey && (
          <p className="App__message">Nothing was pressed yet</p>
        )}
        {this.state.pressedKey && (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]{' '}
          </p>
        )}
      </div>
    );
  }
}

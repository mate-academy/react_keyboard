import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: undefined,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: `The last pressed key is ${event.key}` });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? this.state.pressedKey
            : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}

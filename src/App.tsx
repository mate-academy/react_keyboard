import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    return (
      <>
        { this.state.pressedKey
          ? (
            <p className="App__message">
              {`The last pressed key is [${this.state.pressedKey}]`}
            </p>
          )

          : <p className="App__message">Nothing was pressed yet</p>}
      </>
    );
  }
}

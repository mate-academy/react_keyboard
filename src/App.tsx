import React from 'react';

interface AppState {
  pressedKey: string | null
}

export class App extends React.Component<{}, AppState> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyup);
  }

  onKeyup = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">
            The last pressed key is [
            {pressedKey}
            ]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

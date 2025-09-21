import React from 'react';

interface AppState {
  pressedKey: string | null;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pressedKey: null,
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    console.log(event.key);
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <div className="App__container">
          {pressedKey === null ? (
            <p className="App__message">Nothing was pressed yet</p>
          ) : (
            <p className="App__message">
              The last pressed key is [{pressedKey}]
            </p>
          )}
        </div>
      </div>
    );
  }
}

export { App };

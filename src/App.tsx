import React from 'react';

interface PressedKey {
  pressedKey: string;
}

export class App extends React.Component<{}, PressedKey> {
  state: PressedKey = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  shouldComponentUpdate(_nextProps: {}, nextState: PressedKey) {
    // Only re-render if key change
    return nextState.pressedKey !== this.state.pressedKey;
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

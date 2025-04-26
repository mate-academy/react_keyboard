import React, { Component } from 'react';

interface AppState {
  pressedKey: string | null;
}

class App extends Component<{}, AppState> {
  setState(arg0: { pressedKey: string; }) {
    throw new Error('Method not implemented.');
  }
  state: { pressedKey: any; };
  constructor(props: {}) {
    super(props);
    this.state = {
      pressedKey: null, // Initialize with null to represent no key pressed yet
    };
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key }); // Update the state with the last pressed key
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp); // Add keyup event listener
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp); // Remove keyup event listener
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div>
        <h1>React Keyboard</h1>
        <p>
          {pressedKey
            ? `The last pressed key is "${pressedKey}"`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

export default App;

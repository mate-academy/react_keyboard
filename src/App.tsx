/* eslint-disable */
import * as React from 'react';

interface AppState {
  pressedKey: string;
}

 class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      pressedKey: 'Nothing was pressed yet',
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

export { App };

/* eslint-disable no-console */
import React, { Key } from 'react';

interface State {
  pressedKey: Key | null;
}

export class App extends React.Component<{}, State> {
  state: State = {
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
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {
          pressedKey
            ? <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
            : <p className="App__message">Nothing was pressed yet</p>
        }
      </div>
    );
  }
}

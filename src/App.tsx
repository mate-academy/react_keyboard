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

    return pressedKey
      ? <p>{`The last pressed key is [${pressedKey}]`}</p>
      : <p>Nothing was pressed yet</p>;
  }
}

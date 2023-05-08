/* eslint-disable no-console */
import React, { Key } from 'react';

type State = {
  pressedKey: Key | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      console.log(event.key);
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      console.log(event.key);
    });
  }

  render() {
    const { pressedKey } = this.state;

    if (pressedKey) {
      return <p>{`The last pressed key is [${pressedKey}]`}</p>;
    }

    return <p>Nothing was pressed yet</p>;
  }
}

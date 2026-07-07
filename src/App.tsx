import React from 'react';

import { State } from './types/State';

export class App extends React.Component {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    const { pressedKey } = this.state;

    return <p className="App__message">{pressedKey}</p>;
  }
}

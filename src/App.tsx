/* eslint-disable no-console */
import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleListener = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleListener);
  }

  renderMessage() {
    const { pressedKey } = this.state;
    const message = pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : `Nothing was pressed yet`;

    return <p className="App__message">{message}</p>;
  }

  render() {
    return <div className="App">{this.renderMessage()}</div>;
  }
}

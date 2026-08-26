import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    const msg =
      pressedKey === ''
        ? 'Nothing was pressed yet'
        : `The last pressed key is [${pressedKey}]`;

    return (
      <div className="App">
        <p className="App__message">{msg}</p>
      </div>
    );
  }
}

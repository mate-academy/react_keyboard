import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    let keyName = event.key;

    if (keyName === ' ') {
      keyName = 'space';
    }

    this.setState({ pressedKey: keyName });
  };

  commentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

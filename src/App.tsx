import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUpHandler);
  }

  onKeyUpHandler = (event: KeyboardEvent) => {
    const formattedKeyCode = event.code
      .split('Key')
      .join('');

    this.setState({ pressedKey: formattedKeyCode });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

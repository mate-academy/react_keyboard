import React from 'react';

type State = {
  pressedKey: string;
  isKey: boolean;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
    isKey: false,
  };

  changeKeyHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key, isKey: true });
  };

  componentDidMount() {
    this.setState({ pressedKey: 'Nothing was pressed yet' });

    window.addEventListener('keyup', this.changeKeyHandler);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.changeKeyHandler);
  }

  render() {
    const { pressedKey, isKey } = this.state;

    return (
      <div className="App">
        {isKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">{pressedKey}</p>
        )}
      </div>
    );
  }
}

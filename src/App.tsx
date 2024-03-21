import React from 'react';

type State = {
  pressedKey: string;
  pressed: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
    pressed: false,
  };

  handleKey = (event: KeyboardEvent): void => {
    this.setState({ pressed: true, pressedKey: `[${event.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKey);
  }

  render() {
    const { pressedKey, pressed } = this.state;

    return (
      <div>
        {pressed ? (
          <p className="App__message">The last pressed key is {pressedKey}</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

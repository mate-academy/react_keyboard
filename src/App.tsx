import React from 'react';

type State = {
  pressedKey: string;
  pressed: boolean;
}

export class App extends React.Component<{}, State> {

  state: State = {
    pressedKey: '',
    pressed: false,
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ pressed: true, pressedKey: `[${event.key}]` });
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

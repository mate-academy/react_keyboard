import React from 'react';

type State = {
  pressedKey: string | KeyboardEvent;
  pressed: boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
    pressed: false,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressedButton);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressedButton);
  }

  pressedButton = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
    this.setState({ pressed: true });
  };

  render() {
    const { pressedKey, pressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressed
            ? `The last pressed key is [${pressedKey}]`
            : pressedKey}
        </p>
      </div>
    );
  }
}

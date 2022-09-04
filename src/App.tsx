import React from 'react';

type State = {
  pressedKey: string | KeyboardEvent
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.pressedButton);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressedButton);
  }

  pressedButton = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
      </div>
    );
  }
}

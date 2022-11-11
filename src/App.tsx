import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressed);
  }

  keyPressed = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const key = this.state.pressedKey;

    return (
      <div className="App">
        <p className="App__message">
          {key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

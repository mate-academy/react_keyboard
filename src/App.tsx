import React from 'react';

type State = {
  lastPressedKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    lastPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyPressed);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.handlerKeyPressed);
  }

  handlerKeyPressed = (eventKeyPress: KeyboardEvent) => {
    this.setState({ lastPressedKey: eventKeyPress.key });
  };

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey
            ? `The last pressed key is [${lastPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

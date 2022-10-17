import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPress);
  }

  keyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const keyMessage = this.state.pressedKey
      ? `The last pressed key is[${this.state.pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">
          {keyMessage}
        </p>
      </div>
    );
  }
}

import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener(
      'keyup',
      this.changerOfPressedKeyValueInStateObject,
    );
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keyup',
      this.changerOfPressedKeyValueInStateObject,
    );
  }

  changerOfPressedKeyValueInStateObject = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

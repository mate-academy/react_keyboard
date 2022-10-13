import { Component } from 'react';

type State = {
  pressedKey: boolean;
  keyName: string;
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: false,
    keyName: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.pressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressKey);
  }

  pressKey = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: true,
      keyName: event.key,
    });
  };

  render() {
    const { pressedKey, keyName } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${keyName}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

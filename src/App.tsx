import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keypress);
  }

  keypress = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: `The last pressed key is [${event.code}]` });
    }
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}

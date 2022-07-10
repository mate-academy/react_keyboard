import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.outputPresedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.outputPresedKey);
  }

  outputPresedKey = (event: KeyboardEvent) => {
    window.console.log(this.state.pressedKey);
    if (event.key.length > 0) {
      this.setState({ pressedKey: `The last pressed key is ${event.key}` });
      window.console.log(this.state.pressedKey);
    }
  };

  render() {
    return (
      <p>{this.state.pressedKey}</p>
    );
  }
}

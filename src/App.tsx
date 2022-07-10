import { Component } from 'react';

type State = {
  pressedKey: string,
};
export class App extends Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.onKeyUp);
  }

  onKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is ${event.key}` });
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.pressedKey}</p>
      </div>
    );
  }
}

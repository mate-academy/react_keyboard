import { Component } from 'react';

type State = {
  pressedKey: string | number,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.press);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.press);
  }

  press = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${event.key === ' '
        ? 'Space'
        : event.key}]`,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{ this.state.pressedKey }</p>
      </div>
    );
  }
}

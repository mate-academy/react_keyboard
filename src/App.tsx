import { Component } from 'react';

type State = {
  pressedKey: string
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.key);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.key);
  }

  key = (event: KeyboardEvent) => {
    if (event.key === ' ') {
      this.setState({ pressedKey: 'The last pressed key is Space' });
    } else {
      this.setState({ pressedKey: `The last pressed key is ${event.key}` });
    }

    // eslint-disable-next-line no-console
    console.log(event.key);
  };

  render() {
    return (
      <div className="App">
        <p>
          {this.state.pressedKey}
        </p>
      </div>
    );
  }
}

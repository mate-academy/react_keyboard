import { Component } from 'react';

type State = {
  pressedKey: string;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  }

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key })
    })
  };

  componentWillUnMount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key })
    })
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'No pressed button yet'
        }
        </p>
      </div>
    )
  }
};

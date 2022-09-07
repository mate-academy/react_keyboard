import { Component, ReactNode } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.buttonClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.buttonClick);
  }

  buttonClick = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: event.key });
    }
  };

  render(): ReactNode {
    return (
      <div className="App">
        {
          this.state.pressedKey
            ? <p className="App__message">{`The last pressed key is [${this.state.pressedKey}]`}</p>
            : <p className="App__message">Nothing was pressed yet</p>
        }
      </div>
    );
  }
}

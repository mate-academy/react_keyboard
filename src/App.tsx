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
    this.setState({ pressedKey: event.key });
  };

  render(): ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressedKey
              ? `The last pressed key is [${pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

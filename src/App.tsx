import { Component, ReactNode } from 'react';

type State = {
  pressedKey : string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  initialText = 'Nothing was pressed yet';

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  handleKeyPressed = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `${event.key}` });
  };

  render(): ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {(pressedKey.length > 0) ? (
            `The last pressed key is [${pressedKey}]`
          ) : (
            this.initialText
          )}
        </p>
      </div>
    );
  }
}

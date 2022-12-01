import { Component, ReactNode } from 'react';

type State = {
  pressedKey : string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  text = 'Nothing was pressed yet';

  componentDidMount() {
    document.addEventListener('keyup', this.isClicked);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.isClicked);
  }

  isClicked = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `${event.key}` });
  };

  render(): ReactNode {
    const button = this.state.pressedKey;

    return (
      <div className="App">
        <p className="App__message">
          {(button.length > 0) ? (
            `The last pressed key is [${button}]`
          ) : (
            this.text
          )}
        </p>
      </div>
    );
  }
}

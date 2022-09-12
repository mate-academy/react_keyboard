import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentEvent);
  }

  handleDocumentEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.pressedKey
              ? `The last pressed key is [${this.state.pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

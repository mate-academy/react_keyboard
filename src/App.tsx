import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
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

    if (this.state.pressedKey === ' ') {
      this.state.pressedKey = 'space';
    }
  };

  render(): React.ReactNode {
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

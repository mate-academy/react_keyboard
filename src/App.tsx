import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentEvent);
  }

  handleDocumentEvent = (event: KeyboardEvent) => {
    if (event.key === 'space') {
      this.setState({ pressedKey: 'The last pressed key is [space]' });
    } else {
      this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
    }
  };

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey}
        </p>
      </div>
    );
  }
}

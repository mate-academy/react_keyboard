import { Component } from 'react';

type State = {
  pressKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyPress);
  }

  handleDocumentKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressKey: event.key });
  };

  render() {
    const { pressKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressKey
              ? `The last pressed key is [${pressKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

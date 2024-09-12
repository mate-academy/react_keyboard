import { Component } from 'react';

type State = {
  keyPressMessage: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    keyPressMessage: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.hendleDocumentKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.hendleDocumentKeyPress);
  }

  hendleDocumentKeyPress = (event: KeyboardEvent) => {
    this.setState({ keyPressMessage: event.key });
  };

  render() {
    const { keyPressMessage } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            keyPressMessage
              ? `The last pressed key is [${keyPressMessage}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

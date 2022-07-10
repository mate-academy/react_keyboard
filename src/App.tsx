import { Component } from 'react';

type State = {
  message: string,
};

export class App extends Component<{}, State> {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentPressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentPressedKey);
  }

  handleDocumentPressedKey = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ message: `The last pressed key is ${event.key}` });
    }
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p>{message}</p>
      </div>
    );
  }
}

import { Component } from 'react';

interface State {
  key: string;
}

export class App extends Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyboardHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyboardHandler);
  }

  keyboardHandler = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    const message = key
      ? `The last pressed key is [${key}]`
      : 'Nothing was pressed yet';

    return (
      <p className="App__message">{message}</p>
    );
  }
}

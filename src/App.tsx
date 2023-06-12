import { Component } from 'react';

interface State {
  key: string | null;
}

export class App extends Component<{}, State> {
  state = {
    key: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
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

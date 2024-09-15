import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handler);
  }

  handler = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({ key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

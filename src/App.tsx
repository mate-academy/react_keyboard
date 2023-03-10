import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeypress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeypress);
  }

  handleKeypress = ({ key }: KeyboardEvent): void => {
    this.setState({ key });
  };

  render() {
    const { key } = this.state;

    const message = key
      ? `The last pressed key is [${key}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">
          {message}
        </p>
      </div>
    );
  }
}

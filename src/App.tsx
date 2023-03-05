import { Component } from 'react';

type State = {
  key: string | null;
};

export class App extends Component<{}, State> {
  state = {
    key: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeypress);
  }

  componentWillUnmount(): void {
    document.addEventListener('keyup', this.handleKeypress);
  }

  handleKeypress = (event: KeyboardEvent): void => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            key
              ? `The last pressed key is [${key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

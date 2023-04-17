import { Component } from 'react';

type State = {
  key: string | null,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyPressHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyPressHandler);
  }

  keyPressHandler = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({ key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            key
              ? `${`The last pressed key is [${key}]`}`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

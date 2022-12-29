import { Component } from 'react';

type State = {
  lastKey: string | null;
};

export class App extends Component<{}, State> {
  state = {
    lastKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {(lastKey
            ? `The last pressed key is [${lastKey}]`
            : 'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}

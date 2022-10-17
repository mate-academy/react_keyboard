import { Component } from 'react';

type State = {
  lastKey: string,
};

export class App extends Component<{}, State> {
  state = {
    lastKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressKeyHandler);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.pressKeyHandler);
  }

  pressKeyHandler = (event:KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey ? (
            `The last pressed key is [${lastKey}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}

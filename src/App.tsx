import { Component } from 'react';

type State = {
  lastKey: number | string | null,
};

export class App extends Component<{}, State> {
  state = {
    lastKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressKey);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.pressKey);
  }

  pressKey = (event:KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastKey ? (
            `The last pressed key is [${this.state.lastKey}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}

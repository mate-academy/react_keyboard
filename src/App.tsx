import { Component } from 'react';

type State = {
  pressKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key) {
        this.setState({ pressKey: `The last pressed key is [${event.key}]` });
      }
    });
  }

  componentWillUnmount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key) {
        this.setState({ pressKey: event.key });
      }
    });
  }

  render() {
    const { pressKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { pressKey }
        </p>
      </div>
    );
  }
}

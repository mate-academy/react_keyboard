import { Component } from 'react';

type State = {
  pressKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressKey: `The last pressed key is [${event.key}]` });
  };

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

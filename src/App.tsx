import { Component } from 'react';

type State = {
  pressedKey: string | null
};

type Props = {};

export class App extends Component<Props, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({
      pressedKey: key,
    });
  };

  message(): string {
    return this.state.pressedKey !== null
      ? `The last pressed key is [${this.state.pressedKey}]`
      : 'Nothing was pressed yet';
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.message()}
        </p>
      </div>
    );
  }
}

import { Component } from 'react';

type State = {
  pressedKey:string | null;
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({ pressedKey });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

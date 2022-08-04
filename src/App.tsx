import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;
    const message = (pressedKey
      ? `The last pressed key is [${pressedKey}]`
      : 'Nothing was pressed yet');

    return (
      <div className="App">
        <p className="App__message">{ message }</p>
      </div>
    );
  }
}

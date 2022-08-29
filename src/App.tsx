import { Component } from 'react';

type State = {
  pressedKey: string,
  initial: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
    initial: true,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
      initial: false,
    });
  };

  render() {
    const { pressedKey, initial } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {initial ? 'Nothing was pressed yet' : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

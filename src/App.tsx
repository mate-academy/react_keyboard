import { Component } from 'react';

type State = {
  pressedKey: string,
  pressedStatus: boolean,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
    pressedStatus: false,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (e: KeyboardEvent) => {
    this.setState({
      pressedKey: (e.key === ' ')
        ? 'Space'
        : `${e.key}`,
      pressedStatus: true,
    });
  };

  render() {
    const { pressedKey, pressedStatus } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedStatus
            ? `The last pressed key is [ ${pressedKey} ]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

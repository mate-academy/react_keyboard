import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {!pressedKey
          ? <p className="App__message">Nothing was pressed yet</p>
          : (
            <p>
              {pressedKey === ' '
                ? 'The last pressed key is Space'
                : `The last pressed key is ${pressedKey}`}
            </p>
          )}
      </div>
    );
  }
}

import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyBoardClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyBoardClick);
  }

  handleKeyBoardClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });

    if (event.key === ' ') {
      this.setState({ pressedKey: 'Spacebar' });
    }
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { pressedKey.length !== 0
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}

import { Component } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    if (!event.key) {
      this.setState({ pressedKey: null });
    }

    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div>
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </div>
    );
  }
}

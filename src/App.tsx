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

    if (pressedKey === '') {
      return 'Nothing was pressed yet';
    }

    if (pressedKey === ' ') {
      return 'The last pressed key is Space';
    }

    return `The last pressed key is ${pressedKey}`;
  }
}

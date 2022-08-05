import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    const pressedKey = event.code === 'Space'
      ? 'Space'
      : event.key;

    this.setState({ pressedKey });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <p className="App__message">
        { pressedKey === ''
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${pressedKey}]
          `}
      </p>
    );
  }
}

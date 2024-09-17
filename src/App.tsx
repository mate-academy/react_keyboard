import { Component } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    if (!pressedKey) {
      return (<p className="App__message">Nothing was pressed yet</p>);
    }

    return (
      <p className="App__message">
        {`The last pressed key is [${pressedKey}]`}
      </p>
    );
  }
}

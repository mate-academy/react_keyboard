import { Component } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    let { key } = event;

    if (event.code === 'Space') {
      key = 'Space';
    }

    this.setState({ pressedKey: key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

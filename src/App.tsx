import { Component } from 'react';

type State = {
  pressedKey: string
};

export class App extends Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  initialMessage = 'Nothing was pressed yet';

  updatedMessage = 'The last pressed key is';

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (e: KeyboardEvent) => {
    this.setState({
      pressedKey: e.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? this.initialMessage
            : `${this.updatedMessage} [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

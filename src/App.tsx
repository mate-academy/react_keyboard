import { Component } from 'react';

type State = {
  key: string
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({ key: pressedKey });
  };

  render() {
    const { key: pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressedKey
              ? `The last pressed key is [${pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

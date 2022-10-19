import { Component } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHandler.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyupHandler.bind(this));
  }

  keyupHandler(e: KeyboardEvent) {
    this.setState({ pressedKey: e.key });
  }

  render() {
    const { pressedKey } = this.state;

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

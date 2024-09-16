import { Component } from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.hendleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.hendleKeyUp);
  }

  hendleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {(pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}

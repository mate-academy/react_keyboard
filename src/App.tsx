import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState(() => ({
      pressedKey: event.key,
    }));
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <div>
          <h1 className="App__message">
            {pressedKey ? (
              `The last pressed key is [${pressedKey === ' ' ? 'Space' : pressedKey}]`
            ) : ('Nothing was pressed yet')}
          </h1>
        </div>
      </div>
    );
  }
}

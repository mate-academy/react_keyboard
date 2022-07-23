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
    return (
      <div className="App">
        <div>
          <h1 className="App__message">
            {this.state.pressedKey ? (
              `The last pressed key is [${this.state.pressedKey === ' ' ? 'Space' : this.state.pressedKey}]`
            ) : ('Nothing was pressed yet')}
          </h1>
        </div>
      </div>
    );
  }
}

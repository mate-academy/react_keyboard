import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressed);
  }

  keyPressed = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key === ' ' ? 'space' : event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

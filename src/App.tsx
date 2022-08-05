import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.addEventKeyToState);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.addEventKeyToState);
  }

  addEventKeyToState = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({ pressedKey });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      pressedKey.length > 0
        ? (
          <div className="App">
            <p className="App__message">
              The last pressed key is [
              {pressedKey}
              ]
            </p>
          </div>
        )
        : (
          <div className="App">
            <p className="App__message">
              Nothing was pressed yet
            </p>
          </div>
        )
    );
  }
}

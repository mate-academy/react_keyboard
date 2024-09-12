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
    const pressedKey = event.code === 'Space'
      ? 'Space'
      : event.key;

    this.setState({ pressedKey });
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

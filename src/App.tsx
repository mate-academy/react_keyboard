import { Component } from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends Component {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyHandler);
  }

  keyHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
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

import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleLastPressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleLastPressedKey);
  }

  handleLastPressedKey = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

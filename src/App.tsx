import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyPress);
  }

  handleDocumentKeyPress = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({ pressedKey });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey.length
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: false,
    keySymbol: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyup);
  }

  handleDocumentKeyup = (e: KeyboardEvent) => {
    if (e.key) {
      this.setState({ pressedKey: true });
      this.setState({ keySymbol: e.key });
    }
  };

  render() {
    const { pressedKey, keySymbol } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${keySymbol}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

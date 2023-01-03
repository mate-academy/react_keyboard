import { Component } from 'react';

type State = {
  pressedKey: string | boolean,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: false,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({ pressedKey });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === false
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

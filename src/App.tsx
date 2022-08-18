import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    const pressedKey = `The last pressed key is ${event.key}`;

    this.setState({ pressedKey });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey}
        </p>
      </div>
    );
  }
}

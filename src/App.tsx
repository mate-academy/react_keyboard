import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handleDocumentKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyup);
  }

  render() {
    const pressedKeyMessage =
      this.state.pressedKey === ''
        ? 'Nothing was pressed yet'
        : `The last pressed key is [${this.state.pressedKey}]`;

    return (
      <div className="App">
        <p className="App__message">{pressedKeyMessage}</p>
      </div>
    );
  }
}

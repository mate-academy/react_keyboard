import React from 'react';

type State = {
  hasPressedKey: boolean,
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    hasPressedKey: false,
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentPressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentPressKey);
  }

  handleDocumentPressKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key, hasPressedKey: true });
  };

  render() {
    const {
      pressedKey,
      hasPressedKey,
    } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {hasPressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

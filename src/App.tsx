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

        {hasPressedKey ? (
          <p className="App__message">
            {`The last pressed key is [${pressedKey}]`}
          </p>
        ) : (
          <p className="App__message">
            Nothing was pressed yet
          </p>
        )}

      </div>
    );
  }
}

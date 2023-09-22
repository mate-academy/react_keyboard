import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentPressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentPressedKey);
  }

  handleDocumentPressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is [
          {this.state.pressedKey}
          ]
        </p>
      </div>
    );
  }
}

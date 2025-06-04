import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    key: '',
  };

  handleDocumentKeyboardPressedKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyboardPressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener(
      'keyup',
      this.handleDocumentKeyboardPressedKey,
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.key.length === 0 ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.key}]
          </p>
        )}
      </div>
    );
  }
}

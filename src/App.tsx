import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyup);
  }

  handleDocumentKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        {(!this.state.pressedKey)
          ? (
            <p className="App__message">
              Nothing was pressed yet
            </p>
          )
          : (
            <p className="App__message">
              {`The last pressed key is [${this.state.pressedKey}]`}
            </p>
          )}
      </div>
    );
  }
}

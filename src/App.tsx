import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  handlePressedKeyChange = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
    // eslint-disable-next-line no-console
    console.log(event.key);
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKeyChange);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedKeyChange);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        {this.state.pressedKey ? (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

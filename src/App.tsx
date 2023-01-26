import React from 'react';

type State = {
  pressedButton: string | boolean;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedButton: false,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleButtonPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleButtonPress);
  }

  handleButtonPress = (event: KeyboardEvent) => {
    this.setState({ pressedButton: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          { this.state.pressedButton
            ? `The last pressed key is [${this.state.pressedButton}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}

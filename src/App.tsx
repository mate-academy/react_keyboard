import React from 'react';

type State = {
  pressedButton: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedButton: '',
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
    const { pressedButton } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { pressedButton
            ? `The last pressed key is [${pressedButton}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}

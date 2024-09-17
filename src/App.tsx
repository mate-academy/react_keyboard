/* eslint-disable no-console */
import React from 'react';

type State = {
  pressedButton: string;
}

export class App extends React.Component<{}, State> {
  state:  Readonly<State>  = {
    pressedButton: '',
  };

  handlePressedButtonChange = (event: React.KeyboardEvent) => {
    this.setState({ pressedButton: event.key })
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedButtonChange);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedButtonChange);
  }

render() {
  const { pressedButton } = this.state;

  return (
    <div className="App" tabIndex={0}>
    {pressedButton.length === 0 ? (
      <p className="App__message">Nothing was pressed yet</p>
    ) : (
      <p className="App__message">The last pressed key is [{pressedButton}]</p>
    )}
  </div>
    );
  }
}






import React from 'react';

type State = {
  pressedKey: string;
  isKeyUp: boolean;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
    isKeyUp: false,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key, isKeyUp: true });
  };

  render() {
    const { isKeyUp, pressedKey } = this.state;

    return (
      <div className="App">
        {isKeyUp ? (
          <p className="App__message">
            The last pressed key is [
            {pressedKey}
            ]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

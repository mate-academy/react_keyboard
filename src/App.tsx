import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKeys);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKeys);
  }

  handlePressedKeys = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        {this.state.pressedKey
          ? (
            <p className="App__message">
              The last pressed key is [
              {this.state.pressedKey}
              ]
            </p>
          )
          : <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}

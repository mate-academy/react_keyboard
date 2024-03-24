import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  handleKeyboardClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardClick);
  }

  render() {
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

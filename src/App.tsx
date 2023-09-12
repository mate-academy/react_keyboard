import React from 'react';

interface State {
  pressedKey: string,
}

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey.length
            ? `The last pressed key is ${this.state.pressedKey}`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

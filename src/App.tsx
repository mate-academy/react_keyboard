import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  updatePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.updatePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.updatePressedKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

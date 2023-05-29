import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.componentDidMount);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

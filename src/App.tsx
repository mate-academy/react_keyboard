import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.detectKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.detectKeyPressed);
  }

  detectKeyPressed = (event: KeyboardEvent) => {
    return this.setState({
      pressedKey: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

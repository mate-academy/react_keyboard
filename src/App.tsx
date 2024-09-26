import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUpListener.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUpListener.bind(this));
  }

  keyUpListener(event: KeyboardEvent) {
    this.setState({ pressedKey: event.key });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

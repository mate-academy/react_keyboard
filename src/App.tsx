import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
    key: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', event => {
      this.handleKeyUp(event);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is ${this.state.pressedKey}`}
        </p>
      </div>
    );
  }
}

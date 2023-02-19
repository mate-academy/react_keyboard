import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  conponentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          { this.state.pressedKey ? `The last pressed key is ${this.state.pressedKey}`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

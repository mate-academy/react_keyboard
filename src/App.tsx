import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKey);
  }

  handleKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey ? `The last pressed key is [${pressedKey}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

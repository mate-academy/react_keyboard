import React from 'react';

export class App extends React.Component {
  state = {
    lastPressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey
            ? `The last pressed key is [${lastPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

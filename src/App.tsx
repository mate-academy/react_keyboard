import React from 'react';

interface State {
  lastPressedKey: string;
}

export class App extends React.Component {
  state: State = {
    lastPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      lastPressedKey: event.key,
    });
  };

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        {lastPressedKey ? (
          <p className="App__message">
            The last pressed key is [{lastPressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

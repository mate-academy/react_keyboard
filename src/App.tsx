import React from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    lastPressedKey: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

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

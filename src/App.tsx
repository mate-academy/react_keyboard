
import React from 'react';

type State = {
  lastPressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastPressedKey: null,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      lastPressedKey: event.key,
    });
  };

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${lastPressedKey}]`}
        </p>
      </div>
    );
  }
}

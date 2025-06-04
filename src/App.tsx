import React from 'react';

type State = {
  lastPressKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastPressKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastPressKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { lastPressKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${lastPressKey}]`}
        </p>
      </div>
    );
  }
}

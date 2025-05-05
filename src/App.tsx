import React from 'react';

interface AppType {}

interface AppState {
  lastKey: string | null;
}

export class App extends React.Component<AppType, AppState> {
  state = {
    lastKey: null,
  };

  handleKeyDown = (event: React.KeyboardEvent): void => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${lastKey}]`}
        </p>
      </div>
    );
  }
}

import React from 'react';

interface AppState {
  lastKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    lastKey: null,
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastKey
            ? `The last pressed key is [${this.state.lastKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

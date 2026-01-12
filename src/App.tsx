import React from 'react';

interface AppState {
  lastKey: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    lastKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent): void => {
    this.setState({ lastKey: event.key });
  };

  render(): React.ReactNode {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey
            ? `The last pressed key is [${lastKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

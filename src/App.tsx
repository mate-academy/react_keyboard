import React from 'react';

interface AppState {
  pressKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { pressKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressKey
            ? `The last pressed key is [${pressKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

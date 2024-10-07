import React from 'react';

type State = {
  lastKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastKey: '',
  };

  handleKeyEvent = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyEvent);
  }

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

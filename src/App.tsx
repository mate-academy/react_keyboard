import React from 'react';

type State = {
  lastPressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    lastPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({
      lastPressedKey: event.key,
    });
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

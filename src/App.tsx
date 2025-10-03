import React from 'react';

type State = {
  lastPressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    lastPressedKey: '',
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent): void => {
    this.setState({ lastPressedKey: event.key });
  };

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey ? 
            `The last pressed key is [${lastPressedKey}]`
          : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}

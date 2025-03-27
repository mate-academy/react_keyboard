import React from 'react';

type State = {
  lastKey: string | null;
};

export class App extends React.Component {
  state: Readonly<State> = {
    lastKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    const { lastKey } = this.state;

    return (
      <div className="App">
        {lastKey ? (
          <p className="App__message">{`The last pressed key is [${lastKey}]`}</p>
        ) : (
          <p className="App__message">{'Nothing was pressed yet'}</p>
        )}
      </div>
    );
  }
}

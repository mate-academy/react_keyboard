import React from 'react';

interface State {
  lastKey: string | null,
}

export class App extends React.Component<{}, State> {
  state: State = {
    lastKey: null,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastKey: `The last pressed key is ${event.key}` });
  };

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey || 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

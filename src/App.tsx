import React from 'react';

interface State {
  lastKey: string | null;
}
export class App extends React.Component<{}, State> {
  state: State = {
    lastKey: null,
  };

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastKey === null
            ? `Nothing was pressed yet`
            : `The last pressed key is [${this.state.lastKey}]`}
        </p>
      </div>
    );
  }
}

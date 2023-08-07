import React from 'react';

interface State {
  lastKey: string,
}

export class App extends React.Component<{}, State> {
  state: State = {
    lastKey: 'Nothing was pressed yet',
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
    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is
          {' '}
          {`${this.state.lastKey}`}
        </p>
      </div>
    );
  }
}

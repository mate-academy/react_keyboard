import React from 'react';

interface State {
  currentKey: string | null;
}

export class App extends React.Component<{}, State> {
  state = {
    currentKey: null,
  };

  componentDidMount() {
    document.removeEventListener('keyup', this.getCurrentKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.getCurrentKey);
  }

  getCurrentKey = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentKey
            ? `The last pressed key is [${currentKey}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}

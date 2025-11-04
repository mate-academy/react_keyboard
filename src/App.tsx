import React from 'react';

type State = {
  lastPressedKey: string;
};
export class App extends React.Component<{}, State> {
  state: State = {
    lastPressedKey: '',
  };

  reference: ((event: KeyboardEvent) => void) | null = null;

  componentDidMount() {
    this.reference = (event: KeyboardEvent) => {
      this.setState({
        lastPressedKey: event.key,
      });
    };

    document.addEventListener('keyup', this.reference);
  }

  componentWillUnmount() {
    if (this.reference) {
      document.removeEventListener('keyup', this.reference);
    }
  }

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        {lastPressedKey ? (
          <p className="App__message">
            The last pressed key is [{lastPressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

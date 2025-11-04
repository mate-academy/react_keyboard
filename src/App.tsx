import React from 'react';

type State = {
  lastPressedKey: string;
};
export class App extends React.Component<State> {
  state: State = {
    lastPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', event => {
      this.setState({ lastPressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', () => {});
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

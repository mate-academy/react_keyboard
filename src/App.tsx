import React from 'react';

type State = {
  lastPressedKey: string;
};
export class App extends React.Component<State> {
  state: State = {
    lastPressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      lastPressedKey: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey
            ? `The last pressed key is [${lastPressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}

import React from 'react';

type State = {
  key: string | null;
};
export class App extends React.Component<State> {
  state: State = {
    key: null,
  };

  handleKeyPress = (e: KeyboardEvent) => {
    this.setState({ key: e.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key ? (
          <p className="App__message">The last pressed key is [{key}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

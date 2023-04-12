import React from 'react';

type State = {
  ch: string | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    ch: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ ch: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ ch: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {(this.state.ch)
            ? `The last pressed key is [${this.state.ch}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

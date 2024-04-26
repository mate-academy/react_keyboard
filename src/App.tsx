import React from 'react';

type State = {
  key: string | null;
};

export class App extends React.Component<State> {
  state = {
    key: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key === null ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">{`The last pressed key is [${key}]`}</p>
        )}
      </div>
    );
  }
}

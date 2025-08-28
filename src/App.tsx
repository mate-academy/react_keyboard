import React from 'react';

type State = {
  key: string | null;
};

export class App extends React.Component {
  state: Readonly<State> = {
    key: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.documentElement.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.documentElement.removeEventListener('keyup', this.handleKeyUp);
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
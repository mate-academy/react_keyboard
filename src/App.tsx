import React from 'react';

type State = {
  key: string | null;
};

export class App extends React.Component<State> {
  state: State = {
    key: null,
  };

  handleKeyUp = (e: KeyboardEvent) => {
    this.setState({ key: e.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

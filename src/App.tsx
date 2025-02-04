import React from 'react';

type State = {
  lastKeyPressed: string;
};

export class App extends React.Component<State> {
  state: State = {
    lastKeyPressed: '',
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({
      lastKeyPressed: event.key,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastKeyPressed
            ? `The last pressed key is [${this.state.lastKeyPressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

import React from 'react';

type State = {
  lastKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const beforePressExp = 'Nothing was pressed yet';
    const afterPressExp = `The last pressed key is [${this.state.lastKey}]`;

    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastKey ? afterPressExp : beforePressExp}
        </p>
      </div>
    );
  }
}

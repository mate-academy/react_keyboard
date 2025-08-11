import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}

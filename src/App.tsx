import React from 'react';

type State = {
  lastKeyPressed: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    lastKeyPressed: '',
  };

  changePressedKey = (event: KeyboardEvent) => {
    const currentKey = event.key;

    this.setState({ lastKeyPressed: currentKey });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.changePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.changePressedKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastKeyPressed === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.lastKeyPressed}]`}
        </p>
      </div>
    );
  }
}

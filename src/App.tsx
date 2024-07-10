import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      this.setState({
        pressedKey: e.key,
      });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (e: KeyboardEvent) => {
      this.setState({
        pressedKey: e.key,
      });
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey.length === 0
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

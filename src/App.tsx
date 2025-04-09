import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  onKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.onKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey
          ? <p className="App__message">The last pressed key is [{pressedKey}]</p>
          : <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}

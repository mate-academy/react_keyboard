import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.PureComponent<State> {
  state = {
    pressedKey: '',
  };

  findPressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.findPressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.findPressedKey);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey === '' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}

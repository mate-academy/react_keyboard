import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleClickKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClickKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClickKey);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey === 'Nothing was pressed yet' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}

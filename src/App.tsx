import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <h1>Keyboard Tracker</h1>

        {pressedKey === null ? (
          <p>Nothing was pressed yet</p>
        ) : (
          <p>The last pressed key is {pressedKey}</p>
        )}
      </div>
    );
  }
}

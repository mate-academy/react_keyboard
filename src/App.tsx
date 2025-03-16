import React from 'react';

type State = {
  pressedKey: null | string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  };

  updatePressedKey = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.updatePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.updatePressedKey);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

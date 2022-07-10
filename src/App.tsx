import React from 'react';

interface State {
  pressedKey: string | null,
}

export class App extends React.Component {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressKey);
  }

  handlePressKey = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <h1>Press any button</h1>
        {this.state.pressedKey
          ? <h3>{`The last pressed key is ${pressedKey}`}</h3>
          : <h3>Nothing was pressed yet</h3>}
      </div>
    );
  }
}

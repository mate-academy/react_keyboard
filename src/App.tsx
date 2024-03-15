import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component {
  state: State = {
    pressedKey: null,
  };

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  render() {
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

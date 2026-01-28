import React from 'react';

type State = { pressedKey: string };
export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}

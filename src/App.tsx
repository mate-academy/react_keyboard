import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleState);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleState);
  }

  handleState = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

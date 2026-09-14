import React from 'react';

type State = {
  pressedKey: string;
};
export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyPress = (event: KeyboardEvent) => {
    // eslint-disable-next-line no-console
    console.log(event.key);
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey.length
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

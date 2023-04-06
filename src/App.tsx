import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyPress);
  }

  handleDocumentKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `${event.key}` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is [
          {this.state.pressedKey}
          ]
        </p>
      </div>
    );
  }
}

import React from 'react';

type State = {
  pressedKey: string | null,
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: null,
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
          {this.state.pressedKey === null
            ? ('Nothing was pressed yet')
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}

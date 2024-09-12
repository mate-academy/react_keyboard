import React from 'react';

export class App extends React.PureComponent {
  state = {
    pressedkey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPressed);
  }

  handleKeyPressed = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState((currentState) => ({
      ...currentState,
      pressedkey: key,
    }));
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.pressedkey
              ? `The last pressed key is [${this.state.pressedkey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

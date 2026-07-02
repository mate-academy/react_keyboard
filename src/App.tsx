import React from 'react';

interface State {
  pressedKey : string;
}
export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey : '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey : event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey  === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey }]`}
        </p>
      </div>
    );
  }
}

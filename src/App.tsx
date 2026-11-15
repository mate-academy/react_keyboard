import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  keyup = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyup);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}

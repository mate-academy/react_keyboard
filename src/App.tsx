import React from 'react';

type Props = {};
type State = {
  pressedKey: string,
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyDownHandler);
  }

  keyDownHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidUnmount(): void {
    document.removeEventListener('keyup', this.keyDownHandler);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.pressedKey
              ? `The last pressed key is [${this.state.pressedKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

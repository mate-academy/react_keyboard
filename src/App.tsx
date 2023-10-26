import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.PureComponent {
  state: State = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyboardHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyboardHandler);
  }

  keyboardHandler = (event: KeyboardEvent) => {
    this.setState(
      { pressedKey: event.key },
    );
  };

  render() {
    return (

      <div className="App">

        {this.state.pressedKey !== null
          ? (
            <p className="App__message">
              {`The last pressed key is [${this.state.pressedKey}]`}

            </p>
          )

          : (<p className="App__message">Nothing was pressed yet</p>)}
      </div>
    );
  }
}

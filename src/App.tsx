import React from 'react';

type Props = {};

type State = {
  isDefaultMessage: boolean;
  pressedKey: string | null;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    isDefaultMessage: true,
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({
        isDefaultMessage: false,
        pressedKey: event.key,
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.isDefaultMessage ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        )}
      </div>
    );
  }
}

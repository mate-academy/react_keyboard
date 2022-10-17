import React from 'react';

type State = {
  pressedButton: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedButton: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.getPressedButton);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.getPressedButton);
  }

  getPressedButton = (event: KeyboardEvent) => {
    this.setState({ pressedButton: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            (this.state.pressedButton)
              ? `The last pressed key is [${this.state.pressedButton}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

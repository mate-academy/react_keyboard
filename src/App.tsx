import React from 'react';

export type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyHandler);
  }

  keyHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressedKey === ''
              ? 'Nothing was pressed yet'
              : `The lat pressed key is [${this.state.pressedKey}]`
          }
        </p>
      </div>
    );
  }
}

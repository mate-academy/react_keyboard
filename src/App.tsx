import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">

          {!this.state.pressedKey
            ? 'Nothing was pressed yet'
            : `he last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

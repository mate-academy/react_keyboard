import React from 'react';

type State = {
  pressedKey: string
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'none',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.whichKeyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.whichKeyPressed);
  }

  whichKeyPressed = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { pressedKey === 'none'
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

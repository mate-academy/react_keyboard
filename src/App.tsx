import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keypress', this.changeKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.changeKeyUp);
  }

  changeKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

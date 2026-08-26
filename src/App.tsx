import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    if (pressedKey === '') {
      return 'Nothing was pressed yet';
    }

    return (
      <div className="App">
        <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
      </div>
    );
  }
}

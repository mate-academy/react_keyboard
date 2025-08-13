import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handleKeyPressing = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPressing);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPressing);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

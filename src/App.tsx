import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

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

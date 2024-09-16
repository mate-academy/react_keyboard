import React from 'react';

type State = {
  keyInput: string;
};

export class App extends React.Component {
  state: State = {
    keyInput: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ keyInput: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { keyInput: pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}

import React from 'react';

interface State {
  keyboardKey: string;
}

export class App extends React.Component<State> {
  state: State = {
    keyboardKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent): void => {
    this.setState({ keyboardKey: event.key });
  };

  render() {
    const { keyboardKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyboardKey
            ? `The last pressed key is [${keyboardKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

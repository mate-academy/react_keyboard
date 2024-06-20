import React from 'react';

type State = {
  keyboardKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    keyboardKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerKeyboardClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerKeyboardClick);
  }

  handlerKeyboardClick = (event: KeyboardEvent) => {
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

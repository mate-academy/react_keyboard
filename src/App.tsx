import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  handlePressKeyboard = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressKeyboard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressKeyboard);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === ''
            ? `Nothing was pressed yet`
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

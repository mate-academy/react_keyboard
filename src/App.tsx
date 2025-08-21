import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handleDocumentKeyBoard = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeyBoard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeyBoard);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div>
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

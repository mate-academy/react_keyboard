import React from 'react';

type State = {
  pressedKey: string;
};
export class App extends React.PureComponent<{}, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleDocumentKeypress = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumentKeypress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentKeypress);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}

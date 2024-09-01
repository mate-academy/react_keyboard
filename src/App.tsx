import React from 'react';

interface State {
  pressedKey: string;
}
export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  initialText = 'Nothing was pressed yet';

  handleKeyup = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;
    const text = this.initialText;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey ? text : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

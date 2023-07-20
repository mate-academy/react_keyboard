import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  // eslint-disable-next-line react/no-deprecated
  componentWillMount(): void {
    document.addEventListener('keyup', this.handleKeyClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyClick);
  }

  handleKeyClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
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

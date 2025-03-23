import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  onKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onKeyUp);
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

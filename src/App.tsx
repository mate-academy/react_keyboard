import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  handlerEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerEvent);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey && (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
        {!pressedKey && <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}

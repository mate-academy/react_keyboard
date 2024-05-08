import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: null,
  };

  handlerKeyUp = (evt: KeyboardEvent) => {
    this.setState(currentState => ({ ...currentState, pressedKey: evt.key }));
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerKeyUp);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey !== null
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

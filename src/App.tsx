import React from 'react';

interface State {
  PressedKey: string;
}

export class App extends React.Component<State> {
  state: Readonly<State> = {
    PressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ PressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ PressedKey: event.key });
    });
  }

  render() {
    const { PressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {PressedKey
            ? `The last pressed key is [${PressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}

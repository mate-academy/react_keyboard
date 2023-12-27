import React from 'react';

type State = {
  pressedKey: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyUp);
  }

  keyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">
            The last pressed key is
            [
            {pressedKey}
            ]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

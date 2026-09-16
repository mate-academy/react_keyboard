import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  keyboardEventFunction = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyboardEventFunction);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyboardEventFunction);
  }

  render() {
    const isNothingPressed = this.state.pressedKey === '';

    const handleKey = () => {
      if (isNothingPressed) {
        return 'Nothing was pressed yet';
      }

      return `The last pressed key is [${this.state.pressedKey}]`;
    };

    return (
      <div className="App">
        <p className="App__message">{handleKey()}</p>{' '}
      </div>
    );
  }
}

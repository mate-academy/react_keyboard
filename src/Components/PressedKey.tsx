import React from 'react';

type State = {
  pressedKey: string;
};

export class PressedKey extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyboardEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyboardEvent);
  }

  keyboardEvent = (event: KeyboardEvent) => {
    this.setState(
      {
        pressedKey: event.key,
      },
    );
  };

  render() {
    const { pressedKey: key } = this.state;

    return (
      <p className="App__message">
        {key === ''
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${key}]`}
      </p>
    );
  }
}

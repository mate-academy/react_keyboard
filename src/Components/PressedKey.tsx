import React from 'react';

type State = {
  key: string;
  text: boolean | string
};

export class PressedKey extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: '',
    text: 'Nothing was pressed yet',
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
        key: event.key,
        text: false,
      },
    );
  };

  render() {
    const { key, text } = this.state;

    return (
      <p className="App__message">
        {text || `The last pressed key is [${key}]`}
      </p>
    );
  }
}

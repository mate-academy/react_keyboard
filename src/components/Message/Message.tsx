import React from 'react';

type State = {
  pressedKey: string;
};

export class Message extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <p className="App__message">
        {pressedKey
          ? (`The last pressed key is [${pressedKey}]`)
          : ('Nothing was pressed yet')}
      </p>
    );
  }
}

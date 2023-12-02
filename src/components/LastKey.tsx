import React from 'react';

type State = {
  pressedKey: string;
};

export class LastKey extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.eventCallback);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.eventCallback);
  }

  eventCallback = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <p className="App__message">
        {this.state.pressedKey === ''
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${this.state.pressedKey}]`}
      </p>
    );
  }
}

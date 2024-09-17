import React from 'react';

type KeyType = {
  keyUp: string;
};

type State = {
  keyUp: string;
};

export class Keyboard extends React.Component<KeyType, State> {
  state: State = {
    keyUp: '',
  };

  render() {
    const { keyUp } = this.props;

    return (
      <p className="App__message">{`The last pressed key is [${keyUp}]`}</p>
    );
  }
}

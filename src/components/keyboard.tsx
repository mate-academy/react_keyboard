import React from 'react';

// document.addEventListener('keyup', (event: KeyboardEvent) => {
//   this.setState({ keyUp: event.key });
// });

type KeyType = {
  keyUp: string;
  setKeyUp: (arg1: string) => void;
  setPressedKey: (arg2: boolean) => void;
};

type State = {
  keyUp: string;
};

export class Keyboard extends React.Component<KeyType, State> {
  state: State = {
    keyUp: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.props.setKeyUp(event.key);
      this.props.setPressedKey(true);
    });

    console.log('componenetDidMount keyBoard');
  }

  componentDidUpdate(
    prevProps: Readonly<KeyType>,
    prevState: Readonly<State>,
    snapshot?: any,
  ): void {
    console.log('componentDidUpdate');
  }

  componentWillUnmount(): void {
    console.log('componenetWillUnmount keyBoard');
  }

  render() {
    const { keyUp } = this.props;

    return (
      <p className="App__message">{`The last pressed key is [${keyUp}]`}</p>
    );
  }
}

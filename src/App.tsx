import { Component } from 'react';

type State = {
  pressedKey: string;
};

type Props = {};

export class App extends Component<Props, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerKeyUp);
  }

  handlerKeyUp = (event: KeyboardEvent) => (
    event.code === 'Space'
      ? this.setState({ pressedKey: event.code })
      : this.setState({ pressedKey: event.key })
  );

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

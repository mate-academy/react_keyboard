import { Component } from 'react';

type State = {
  pressedKey:string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.onKeyDown);
  }

  onKeyDown = (event:KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </p>
    );
  }
}

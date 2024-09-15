import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerDocumentKeyUp);
  }

  handlerDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey.length ? `The last pressed key is [${pressedKey}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

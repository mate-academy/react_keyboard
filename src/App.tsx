import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyupHandler);
  }

  keyupHandler = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;
    const pressed = pressedKey.length === 0;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressed
              ? (
                'Nothing was pressed yet'
              ) : (
                `The last pressed key is [${pressedKey}]`
              )
          }
        </p>
      </div>
    );
  }
}

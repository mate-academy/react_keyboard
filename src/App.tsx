import { Component } from 'react';

type State = {
  message: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    message: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressedKey);
  }

  pressedKey = (event: KeyboardEvent) => {
    this.setState({ message: event.key });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            message
              ? `The last pressed key is [${message}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

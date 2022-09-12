import { Component } from 'react';

type State = {
  message: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressed);
  }

  keyPressed = (event: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    // const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}

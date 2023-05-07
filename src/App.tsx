import { Component } from 'react';

type Message = {
  message: string,
};

export class App extends Component<{}, Message> {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (e) => {
      const keyUp = e.key;
      const message = `The last pressed key is ${keyUp}`;

      this.setState({ message });
    });
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}

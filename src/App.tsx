import { Component } from 'react';

type State = {
  pressedKey: boolean,
  message: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: true,
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: true, message: `The last pressed key is ${event.key}` });
    }

    if (event.key === 'Escape') {
      this.setState({ pressedKey: false });
    }

    if (event.key === ' ') {
      this.setState({
        pressedKey: true,
        message: 'Invalid key, please choose the letter',
      });
    }
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        {this.state.pressedKey && <p>{this.state.message}</p>}
      </div>
    );
  }
}

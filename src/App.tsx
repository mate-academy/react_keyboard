import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    setTimeout(() => {
      document.removeEventListener('keyup', this.handleClick);
    }, 3000);
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last prerssed key is [${event.key}]` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p>
          {pressedKey}
        </p>
      </div>
    );
  }
}

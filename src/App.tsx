import { Component } from 'react';

type State = {
  pressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerClick);
  }

  handlerClick = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
    }
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.pressedKey}</p>
      </div>
    );
  }
}

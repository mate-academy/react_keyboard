import { Component } from 'react';

type State = {
  pressed: string,
};

export class App extends Component<{}, State> {
  state = {
    pressed: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.listener);
  }

  listener = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressed: `The last pressed key is [${event.key}]` });
    }
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.pressed}</p>
      </div>
    );
  }
}

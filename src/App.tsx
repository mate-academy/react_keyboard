import { Component } from 'react';

type State = {
  pressedKey: string | null,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event:KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const key = this.state.pressedKey;

    return (
      <div className="App">
        <p className="App__message">
          {(key === null
            && 'Nothing was pressed yet')
            || `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}

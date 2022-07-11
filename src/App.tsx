import { Component } from 'react';

type State = {
  PressedKey: string,
};

export class App extends Component<{}, State> {
  state = {
    PressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyboardClick);
  }

  handleKeyboardClick = (event: KeyboardEvent) => {
    this.setState({ PressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { PressedKey } = this.state;

    return (
      <div className="App">
        <p>{PressedKey}</p>
      </div>
    );
  }
}

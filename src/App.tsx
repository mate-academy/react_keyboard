import { Component } from 'react';

type State = {
  pressedKey: string;
  isKeyNotPressed: boolean;
};

export class App extends Component<{}, State> {
  state = {
    pressedKey: '',
    isKeyNotPressed: true,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
      isKeyNotPressed: false,
    });
  };

  render() {
    const { pressedKey, isKeyNotPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {isKeyNotPressed
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

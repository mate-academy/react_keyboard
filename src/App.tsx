import { Component } from 'react';

type State = {
  pressedKey: string;
};

export class App extends Component {
  state: State = {
    pressedKey: '',
  };

  handlePress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePress);
  }

  render() {
    const pressedKey = this.state.pressedKey;

    return (
      <>
        {pressedKey.length > 0 ? (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </>
    );
  }
}

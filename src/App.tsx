import { Component } from 'react';

type State = {
  // isPressedKey: boolean
  currentKey: string,
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    // isPressedKey: false,
    currentKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePress);
  }

  handlePress = (event: KeyboardEvent) => {
    this.setState({
      // isPressedKey: true,
      currentKey: event.key,
    });
  };

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        {currentKey
          ? (
            <p className="App__message">
              The last pressed key is [
              {currentKey}
              ]
            </p>
          )
          : (
            <p className="App__message">
              Nothing was pressed yet
            </p>
          )}
      </div>
    );
  }
}

import { Component } from 'react';

export class App extends Component<{}> {
  state = {
    isNotPressed: true,
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPressedEventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressedEventHandler);
  }

  keyPressedEventHandler = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({
        isNotPressed: false,
        pressedKey: event.key,
      });
    }
  };

  render() {
    const { isNotPressed, pressedKey } = this.state;

    return (
      <div className="App">
        <h1>App</h1>
        {isNotPressed
          ? <p>Nothing was pressed yet</p>
          // eslint-disable-next-line react/jsx-one-expression-per-line
          : (<p>The last pressed key is {pressedKey}</p>)}
      </div>
    );
  }
}

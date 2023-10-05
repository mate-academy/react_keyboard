import React from 'react';

type State = {
  pressedKey: string;
}

export class App extends React.Component<State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  }

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
    console.log(event.key);
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    )
  }
}


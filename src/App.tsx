import React from 'react';

type State = {
  pressedKey: any,
}

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: null,
  }

  handleKeyUp = (event: any) => {
    this.setState({ pressedKey: event.key })
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey === null ? "Nothing was pressed yet" : `The last pressed key is [${this.state.pressedKey}]`}</p>
      </div>
    )
  }
}

import React from 'react';

type State = {
  pressedKey: string
}

export class App extends React.Component<{}, State> {

  state: State = {
    pressedKey: '',
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick)
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick)

  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey.length === 0 ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        )}
      </div>
    );
  }
}

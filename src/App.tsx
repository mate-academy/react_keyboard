import React from 'react';

interface AppState {
  pressedKey: string;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${
                pressedKey === ' '
                  ? 'Space'
                  : pressedKey
              }]`}
        </p>
      </div>
    );
  }
}

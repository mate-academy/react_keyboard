import React from 'react';

export class App extends React.PureComponent {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.setState);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            !this.state.pressedKey
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${this.state.pressedKey}]`
          }
        </p>
      </div>
    );
  }
}

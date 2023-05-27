import React from 'react';

interface State {
  lastPressedKey: string;
}
export class App extends React.Component {
  state: State = {
    lastPressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ lastPressedKey: event.key });
  };

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!lastPressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is ${lastPressedKey}`}
        </p>
      </div>
    );
  }
}

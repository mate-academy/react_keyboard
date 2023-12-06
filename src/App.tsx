import React from 'react';

type State = {
  pressedKey: string;
  message: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
    message: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key || '' });
  };

  render() {
    const { pressedKey, message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? message
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

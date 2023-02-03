import React from 'react';

type State = {
  message: string,
};

export class App extends React.Component<{}, State> {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressedKey);
  }

  pressedKey = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { message } = this.state;

    return (
      <h1 className="App__message">{message}</h1>
    );
  }
}

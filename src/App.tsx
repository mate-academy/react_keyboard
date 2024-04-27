import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    message: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}

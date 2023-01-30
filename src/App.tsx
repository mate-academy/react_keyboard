import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component<{}, State> {
  state = {
    message: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.messagePressed);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.messagePressed);
  }

  messagePressed = (event: KeyboardEvent) => {
    this.setState({ message: event.key });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { message
            ? `The last pressed key is [${message}]`
            : 'Nothing was pressed yet' }
        </p>
      </div>
    );
  }
}

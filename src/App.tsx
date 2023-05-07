import React from 'react';

interface State {
  message: string | null;
}

export class App extends React.Component<{}, State> {
  state: State = {
    message: '',
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleButtonPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleButtonPress);
  }

  handleButtonPress = (event: KeyboardEvent) => {
    this.setState({
      message: event.key,
    });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {message
            ? `The last pressed key is [${message}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

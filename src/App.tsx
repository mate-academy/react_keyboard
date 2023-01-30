import React from 'react';

type State = {
  message: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    message: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyupHandler);
  }

  keyupHandler = (event: KeyboardEvent) => {
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

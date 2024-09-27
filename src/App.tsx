import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component<{}, State> {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {message}
        </p>
      </div>
    );
  }
}

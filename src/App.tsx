import React from 'react';

type State = {
  message: string;
  pressedKey: string;
  isKeyPressed: boolean;
};

export class App extends React.Component {
  state: State = {
    message: 'Nothing was pressed yet',
    pressedKey: '',
    isKeyPressed: false,
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { message, pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey ? `The last pressed key is [${pressedKey}]` : message}
        </p>
      </div>
    );
  }
}

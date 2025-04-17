import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    let message;

    if (this.state.pressedKey === '') {
      message = 'Nothing was pressed yet';
    } else {
      message = `The last pressed key is [${this.state.pressedKey}]`;
    }

    return (
      <div className="App">
        <p className="App__message"> {message} </p>
      </div>
    );
  }
}

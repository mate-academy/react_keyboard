import React from 'react';

type State = {
  pressedButton: string;
};

export class App extends React.Component {
  state: State = {
    pressedButton: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedButton: event.key });
  };

  render() {
    const { pressedButton } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedButton
            ? `The last pressed key is [${pressedButton}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

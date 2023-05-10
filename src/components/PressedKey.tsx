import React from 'react';

type Props = {

};

type State = {
  pressedKey: string;
};

export class PressedKey extends React.Component<Props, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    let message = 'Nothing was pressed yet';

    if (pressedKey !== '') {
      message = `The last pressed key is ${pressedKey}`;
    }

    return (
      <div className="App">
        <p className="App__message">
          {message}
        </p>
      </div>
    );
  }
}

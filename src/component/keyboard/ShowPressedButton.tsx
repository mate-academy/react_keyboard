import React from 'react';

type State = {
  pressedKey: string;
};

export class ShowPressedButton extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const {
      pressedKey,
    } = this.state;

    return (
      <p className="App__message">
        {
          pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'
        }
      </p>
    );
  }
}

import React from 'react';

export const text = {
  lastPressedKey: 'The last pressed key is ',
  nothingWasPressedYet: 'Nothing was pressed yet',
};

type Props = {
  //
};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">
            {text.lastPressedKey}[{pressedKey}]
          </p>
        ) : (
          <p className="App__message">{text.nothingWasPressedYet}</p>
        )}
      </div>
    );
  }
}

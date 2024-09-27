import React from 'react';

type Props = {};

interface State {
  pressedKey: string
}

export class App extends React.PureComponent<Props, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {
          pressedKey !== ''
            ? (
              <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
            )
            : (
              <p className="App__message">Nothing was pressed yet</p>
            )
        }
      </div>
    );
  }
}

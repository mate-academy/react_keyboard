import React from 'react';

type Props = {};

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    // eslint-disable-next-line no-console
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {

    const messageUpdate = `The last pressed key is [${this.state.pressedKey}]`;
    const messageMount = 'Nothing was pressed yet';

    return (
      <>
        <div className="App">
          <p className="App__message">
            {this.state.pressedKey !== null
              ? messageUpdate
              : messageMount}
          </p>
        </div>
      </>
    );
  }
}

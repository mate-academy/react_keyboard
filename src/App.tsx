import React from 'react';

type Props = {};

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<Props, State> {
  state: State = { pressedKey: null };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey === null ? (
          <p>Nothing was pressed yet</p>
        ) : (
          <p>The last pressed key is [{this.state.pressedKey}]</p>
        )}
      </div>
    );
  }
}

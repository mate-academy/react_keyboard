import React from 'react';

type State = {
  pressedKey: 'string';
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: string,
  };

  handlePressedKey = (event: KeyboardEvent<HTMLDivElement>) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handlePressedKey);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey !== 'string' ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

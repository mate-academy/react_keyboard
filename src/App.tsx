import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey}
        </p>
      </div>
    );
  }
}

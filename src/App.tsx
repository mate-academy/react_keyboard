import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyEvent);
  }

  keyEvent = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey
          ? <p>{`The last pressed key is ${pressedKey}`}</p>
          : <p>Nothing was pressed yet</p>}
      </div>
    );
  }
}

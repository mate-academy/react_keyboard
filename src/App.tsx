import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleEvent);
  }

  handleEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey.length === 0
          ? <p>Nothing was pressed yet</p>
          : <p>{`The last pressed key is [${pressedKey}]`}</p>}
      </div>
    );
  }
}

import React from 'react';

interface S {
  pressedKey: string;
}

export class App extends React.Component<{}, S> {
  state = {
    pressedKey: '',
  };

  eventHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.eventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.eventHandler);
  }
  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">

        <p className="App__message">{`${pressedKey === '' ? 'Nothing was pressed yet' : `The last pressed key is [${pressedKey}]`}`}</p>
      </div>
    );
  }
}

import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerEvent);
  }

  handlerEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}

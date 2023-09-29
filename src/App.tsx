import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.PureComponent {
  state: State = { pressedKey: 'Nothing was pressed yet' };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerKeyup);
  }

  handlerKeyup = (event: KeyboardEvent) => {
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

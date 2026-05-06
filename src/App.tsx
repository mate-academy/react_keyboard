import React from 'react';

type State = {
  pressedKey: string;
};
export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  keyupHandler = (e: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${e.key}]`,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.keyupHandler);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}

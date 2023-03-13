import React from 'react';

type State = {
  pressed: boolean,
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressed: false,
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.listenKeyups);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.listenKeyups);
  }

  listenKeyups = (event: KeyboardEvent) => {
    this.setState({
      pressed: true,
      pressedKey: event.key,
    });
  };

  render() {
    const { pressed, pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {(pressed)
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

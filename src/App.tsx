import React from 'react';

type State = {
  pressed: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressedKey);
  }

  pressedKey = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({ pressed: key });
  };

  render() {
    const { pressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressed
            ? `The last pressed key is [${pressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

import React from 'react';

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<State> {
  state = {
    pressedKey: null,
  };

  handleClick = (event: KeyboardEvent) => {
      const key = event.key;

      this.setState({ pressedKey: key });
    }

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is: [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

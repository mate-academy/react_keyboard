import React from 'react';

type State = {
  pressedKey: string | null;
};
export class App extends React.Component<State> {
  state = {
    pressedKey: null,
  };

  handelKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handelKeyUp);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handelKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

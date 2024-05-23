import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  setKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.setKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.setKey);
  }

  render() {
    const { pressedKey } = this.state;
    const enteredKey = `The last pressed key is [${pressedKey}]`;
    const notPressed = 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === '' ? notPressed : enteredKey}
        </p>
      </div>
    );
  }
}

import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

type State = {
  pressedKey: '';
};

export class App extends React.PureComponent<State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboardEvent);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardEvent);
  }

  handleKeyboardEvent = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render(): React.ReactNode {
    const messageToShow = this.state.pressedKey
      ? `The last pressed key is [${this.state.pressedKey}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{messageToShow}</p>
      </div>
    );
  }
}

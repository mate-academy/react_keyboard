import React from 'react';

// export const App: React.FC = () => (
// <div className="App">
//   <p className="App__message">The last pressed key is [Enter]</p>
// </div>
// );

interface State {
  pressedKey: string;
}

interface Props {}

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">{`The last pressed key is [${this.state.pressedKey}]`}</p>
      </div>
    );
  }
}

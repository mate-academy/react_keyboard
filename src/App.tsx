import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p>Nothing was pressed yet</p>
//     <p>The last pressed key is [Enter]</p>
//   </div>
// );

type State = {
  pressedKey: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyupHandler);
  }

  keyupHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    return (
      <div className="App">
        {this.state.pressedKey
          ? <p>{`The last pressed key is ${this.state.pressedKey}`}</p>
          : <p>Nothing was pressed yet</p>}
      </div>
    );
  }
}

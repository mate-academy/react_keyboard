import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

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
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key === ' ') {
        this.setState({ pressedKey: 'The last pressed key is space' });
      } else {
        this.setState({ pressedKey: `The last pressed key is ${event.key}` });
      }
    });
  }

  componentWillUnmount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key === ' ') {
        this.setState({ pressedKey: 'The last pressed key is space' });
      } else {
        this.setState({ pressedKey: `The last pressed key is ${event.key}` });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.pressedKey}</p>
      </div>
    );
  }
}

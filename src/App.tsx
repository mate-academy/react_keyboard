import { Component } from 'react';

type State = {
  key: string;
};

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

export class App extends Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressedKey);
  }

  pressedKey = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ key: event.key });
    }
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.key
              ? `The last pressed key is [${this.state.key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}

import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    const message = this.state.key
      ? `The last pressed key is [${this.state.key}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}

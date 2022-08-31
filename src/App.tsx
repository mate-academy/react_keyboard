import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );
type State = {
  selectedKey: string,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    selectedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handler);
  }

  handler = (event: KeyboardEvent) => {
    this.setState({
      selectedKey: event.code === 'Space'
        ? 'Space'
        : event.key,
    });
  };

  render() {
    const { selectedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {selectedKey
            ? `The last pressed key is [${selectedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
export default App;

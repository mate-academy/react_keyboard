import React from 'react';

class App extends React.Component {
  state = {
    x: 'Nothing was pressed yet',
  };

  addLetter = (event: KeyboardEvent) => {
    this.setState({x: `The last pressed key is [${event.key}]`});
  }

  componentDidMount() {
    document.addEventListener('keyup', this.addLetter)
  }

  componentWillUnmount() {
    removeEventListener('keyup', this.addLetter);
  }

  render() {
    return (
      <div className="App">
      <p className="App__message">{this.state.x}</p>
    </div>
    );
  }
}

export default App;

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

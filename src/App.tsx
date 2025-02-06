import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

export class App extends React.Component {
  state = {
    message: '',
  };

  keyHandler = (e: KeyboardEvent) => {
    this.setState({ message: e.key });
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.keyHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.keyHandler);
  }
  render() {
    return (
      <div className="App">
        {!this.state.message && (
          <p className="App__message">Nothing was pressed yet</p>
        )}
        {this.state.message && (
          <p className="App__message">
            The last pressed key is [{this.state.message}]
          </p>
        )}
      </div>
    );
  }
}

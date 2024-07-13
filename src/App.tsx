import React from 'react';

export class App extends React.Component {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', () => {});
  }

  render() {
    return (
      <div className="App">
        {this.state.key ? (
          <p className="App__message">
            The last pressed key is [{this.state.key}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

/*
export const App: React.FC = () => (
  <div className="App">
    <p className="App__message">The last pressed key is [Enter]</p>
  </div>
);
*/

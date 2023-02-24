import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );
export class App extends React.Component {
  state = {
    key: 'Nothing',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKey);
  }

  handleDocumentKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  removeEventListener() {
    document.removeEventListener('keyup', this.handleDocumentKey);
  }

  render() {
    if (this.state.key === 'Nothing') {
      return (
        <div className="App">
          <p className="App__message">
            Nothing was pressed yet
          </p>
        </div>
      );
    }

    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is
          {' '}
          {this.state.key}
        </p>
      </div>
    );
  }
}

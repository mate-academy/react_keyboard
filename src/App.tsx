import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', event => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}

import React from 'react';

export class App extends React.Component {
  state = {
    pressed: false,
    key: null,
  };

  componentDidMount = () => {
    document.addEventListener('keyup', (event) => {
      this.setState({ pressed: true, key: event.key });
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressed
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

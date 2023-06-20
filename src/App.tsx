import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <section className="App__message">
          {pressedKey === null ? (
            <p>Nothing was pressed yet</p>
          ) : (
            <p>
              The last pressed key is
              [
              {pressedKey}
              ]
            </p>
          )}
        </section>
      </div>
    );
  }
}

export default App;

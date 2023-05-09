import React from 'react';

export class App extends React.Component {
  state = {
    lastKeyAp: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPress);
  }

  keyPress = (event: KeyboardEvent) => {
    this.setState({ lastKeyAp: event.key });
  };

  render() {
    const { lastKeyAp } = this.state;

    return (
      <div className="App">
        <p className="App__message">{`The last pressed key is [${lastKeyAp}]`}</p>
      </div>
    );
  }
}

export default App;

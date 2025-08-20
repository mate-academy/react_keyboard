mport React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyUp = (event) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const message =
      this.state.pressedKey === 'Nothing was pressed yet'
        ? 'Nothing was pressed yet'
        : `The last pressed key is [${this.state.pressedKey}]`;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}

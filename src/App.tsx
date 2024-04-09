import React from 'react';

export class App extends React.Component {
  state = {
    message: 'Nothing was pressed yet',
    cat: 0,
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is [${event.key}]`,
      cat: 1,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    return (
      <div className="App">
        <h1>{`Press Any Letter on Your Keyboard.. ${this.state.cat === 0 ? '😼' : '😺'}`}</h1>
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}


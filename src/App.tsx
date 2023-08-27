import React from 'react';

export class App extends React.Component {
  state = {
    keyPressed: null,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      keyPressed: event.key,
    });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPressed ? `The last pressed key is ${keyPressed}` : "Nothing was pressed yet"}
        </p>
      </div>
    );
  }
}

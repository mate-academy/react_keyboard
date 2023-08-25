import React from 'react';

export class App extends React.Component {
  state = {
    wasKeyPressed: false,
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
      wasKeyPressed: true,
      keyPressed: event.key,
    });
  };

  render() {
    const { wasKeyPressed, keyPressed } = this.state;

    if (wasKeyPressed) {
      return (
        <div className="App">
          <p className="App__message">
            The last pressed key is
            {' '}
            {keyPressed}
          </p>
        </div>
      );
    }

    return (
      <div className="App">
        <p className="App__message">Nothing was pressed yet</p>
      </div>
    );
  }
}

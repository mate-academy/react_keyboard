import React, { PureComponent } from 'react';

export class App extends PureComponent {
  state = {
    keyPressed: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = event => {
    this.setState({
      keyPressed: event.key,
    });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        {keyPressed ? (
          <p className="App__message">The last pressed key is [{keyPressed}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

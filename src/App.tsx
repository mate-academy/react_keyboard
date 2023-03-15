import React from 'react';

export class App extends React.Component {
  state = {
    keyMessage: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({
      keyMessage: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.keyMessage}</p>
      </div>
    );
  }
}

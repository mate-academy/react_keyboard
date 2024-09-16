import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    let content;

    if (this.state.pressedKey) {
      content = `The last pressed key is [${this.state.pressedKey}]`;
    } else {
      content = 'Nothing was pressed yet';
    }

    return (
      <div className="App">
        <p className="App__message">{content}</p>
      </div>
    );
  }
}

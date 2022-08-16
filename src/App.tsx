import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event) => {
      this.handleDocumentKey(event.key);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event) => {
      this.handleDocumentKey(event.key);
    });
  }

  handleDocumentKey = (keys: string) => {
    this.setState({ pressedKey: `The last pressed key is [${keys}]` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}

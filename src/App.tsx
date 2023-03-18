import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    const k = event.key;

    this.setState({ pressedKey: k });
  };

  render() {
    const { pressedKey: key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key !== null
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

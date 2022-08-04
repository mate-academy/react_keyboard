import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: undefined,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.toPresstheKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.toPresstheKey);
  }

  toPresstheKey = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key === ' '
        ? 'Space'
        : event.key,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

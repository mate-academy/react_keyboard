import React from 'react';

/* type State = {
  pressedKey: string;
}; */

export class App extends React.Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === 'Nothing was pressed yet'
            ? pressedKey
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

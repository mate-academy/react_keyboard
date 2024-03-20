import React from 'react';

interface State {
  pressedKey: string;
}
export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  handleListen = (e: KeyboardEvent) => {
    this.setState({ pressedKey: e.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleListen);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleListen);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

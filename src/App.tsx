import React from 'react';

type State = {
  pressedKey: string;
};
export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {!pressedKey && <p className="App__message">Nothing was pressed yet</p>}
        {pressedKey && (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}

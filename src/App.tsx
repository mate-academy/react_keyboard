import React from 'react';

interface State {
  pressedKey: string;
}

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Meta',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeypress);
  }

  handleKeypress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === 'Meta'
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}

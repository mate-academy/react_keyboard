import React from 'react';

export class ClassComponent extends React.Component {
  state = {
    pressedKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): React.ReactNode {
    return this.state.pressedKey ? (
      <p className="App__message">
        The last pressed key is [{this.state.pressedKey}]
      </p>
    ) : (
      <p className="App__message">Nothing was pressed yet</p>
    );
  }
}

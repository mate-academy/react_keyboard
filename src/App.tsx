import React from 'react';

type State = {
  currentPressedKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    currentPressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ currentPressedKey: event.key });
  };

  render() {
    const { currentPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentPressedKey
            ? `The last pressed key is [${currentPressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

import React from 'react';

type AppState = {
  pressedKey: string | null;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App__message">
        {pressedKey === null
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${pressedKey}]`}
      </div>
    );
  }
}

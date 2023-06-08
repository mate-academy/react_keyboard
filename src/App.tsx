import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({ pressedKey: 'The last pressed key is [event.key]' });
    }
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          { !pressedKey.length
            ? 'Nothing was pressed yet'
            : pressedKey}
        </p>
      </div>
    );
  }
}

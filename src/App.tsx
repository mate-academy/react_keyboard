import React from 'react';

type State = {
  lastKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    lastKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event:KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  render() {
    const { lastKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKey
            ? `The last pressed key is [${lastKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

import React from 'react';

type State = {
  currentKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    currentKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.eventFunction);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.eventFunction);
  }

  eventFunction = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentKey
            ? `The last pressed key is [${currentKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.callKeyupEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.callKeyupEvent);
  }

  callKeyupEvent = ((event: KeyboardEvent) => {
    this.setState(
      { key: event.key },
    );
  });

  render() {
    const { key } = this.state;
    const message = !key
      ? 'Nothing was pressed yet'
      : `The last pressed key is [${this.state.key}]`;

    return (
      <div className="App">
        <p className="App__message">
          {message}
        </p>
      </div>
    );
  }
}

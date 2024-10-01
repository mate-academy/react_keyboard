import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state: State = { key: '' };

  keyupHandler = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyupHandler);
  }

  render() {
    return (
      <div className="App">
        {this.state.key.length ? (
          <p className="App__message">
            The last pressed key is [{this.state.key}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

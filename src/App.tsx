import React from 'react';

type State = {
  key: string,
};

export class App extends React.Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyListener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyListener);
  }

  keyListener = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        {
          this.state.key
            ? <p className="App__message">{`The last pressed key is [${this.state.key}]`}</p>
            : <p className="App__message">Nothing was pressed yet</p>
        }
      </div>
    );
  }
}

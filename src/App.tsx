import React from 'react';

interface State {
  key: string | null;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

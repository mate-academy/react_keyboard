import React from 'react';

type State = {
  keyName: string;
};

export class App extends React.Component {
  state: State = {
    keyName: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keyName: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ keyName: event.key });
    });
  }

  render() {
    const { keyName } = this.state;

    return (
      <div className="App">
        {keyName.length ? (
          <p className="App__message">
            The last pressed key is [
            {keyName}
            ]
          </p>
        ) : (
          <p className="App__message">
            Nothing was pressed yet
          </p>
        )}

      </div>
    );
  }
}

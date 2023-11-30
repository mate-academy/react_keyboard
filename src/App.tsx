import React from 'react';

type State = {
  key: string
};

export class App extends React.Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', () => {
    });
  }

  render(): React.ReactNode {
    const { key } = this.state;

    return (
      <>
        {key.length === 0
          ? (<p className="App__message">Nothing was pressed yet</p>) : (
            <p className="App__message">
              {`The last pressed key is [${key}]`}
            </p>
          )}
      </>
    );
  }
}

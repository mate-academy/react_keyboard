import React from 'react';

type State = {
  button: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    button: '',
  };

  keyupHandler = (event: KeyboardEvent) => {
    this.setState({ button: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyupHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyupHandler);
  }

  render(): React.ReactNode {
    const { button } = this.state;

    return (
      <div className="App">
        {button ? (
          <p className="App__message">The last pressed key is [{button}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

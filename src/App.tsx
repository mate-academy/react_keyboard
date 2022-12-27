import React from 'react';

type State = {
  enteredKey: string,
};

export class App extends React.Component<{}, State> {
  state = {
    enteredKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ enteredKey: event.key });
    });
  }

  render() {
    const { enteredKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {enteredKey
            ? `The last pressed key is [${enteredKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

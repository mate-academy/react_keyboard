import React from 'react';

type State = {
  keyUp: string,
};

export class App extends React.Component() {
  state: State = {
    keyUp: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUpChange);
  }

  componentWillUnmount(): void {
    document.addEventListener('keyup', this.handleKeyUpChange);
  }

  handleKeyUpChange = (event: KeyboardEvent) => {
    this.setState({ keyUp: event.key });
  };

  render() {
    const { keyUp } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyUp ? (
            `The last pressed key is [${keyUp}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
};

import React from 'react';

type State = {
  key?: string
};

export class App extends React.Component<State> {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const key = this.state.key;

    return (
      <div className="App">
        <p className="App__message">
          {key && (
            `The last pressed key is [${key}]`
          )}
          {!key && (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}

import React from 'react';

type State = {
  key: string,
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.key.length === 0
              ? 'Nothing was pressed yet'
              : `The last pressed key is [${this.state.key}]`
          }
        </p>
      </div>
    );
  }
}

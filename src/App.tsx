import React from 'react';

type State = {
  key: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key === '' && <p className="App__message">Nothing was pressed yet.</p>}
        {key !== '' && (
          <p className="App__message">The last pressed key is [{key}]</p>
        )}
      </div>
    );
  }
}

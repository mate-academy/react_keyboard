import React from 'react';

type State = { key: string };

export class App extends React.Component<State> {
  state = { key: '' };

  keyProvider = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyProvider);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyProvider);
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

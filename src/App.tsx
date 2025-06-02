import React from 'react';

type State = {
  title: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    title: `Nothing was pressed yet`,
  };

  keyListener = (event: KeyboardEvent) => {
    this.setState({ title: `The last pressed key is [${event.key}]` });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyListener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyListener);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.title}</p>
      </div>
    );
  }
}

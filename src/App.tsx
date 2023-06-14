import React from 'react';

type Props = {};

type State = {
  string: string
};

export class App extends React.Component<Props, State> {
  state = {
    string: '',
  };

  componentDidMount(): void {
    this.setState({ string: 'Nothing was pressed yet' });
  }

  componentDidUpdate(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      return (
        this.setState({ string: `The last pressed key is [${event.key}]` }));
    });
  }

  render() {
    const { string } = this.state;

    return (
      <div className="App">
        <p className="App__message">{string}</p>
      </div>
    );
  }
}

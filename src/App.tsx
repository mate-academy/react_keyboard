import React from 'react';

type State = {
  title: string;
};

export class App extends React.Component<Record<string, never>, State> {
  state: State = {
    title: 'Nothing was pressed yet',
  };

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({
      title: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
};

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp)
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.title}</p>
        {/* <p className="App__message">The last pressed key is [Enter]</p> */}
      </div>
    );
  }
}

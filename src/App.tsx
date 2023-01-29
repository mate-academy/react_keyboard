import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => (
      this.setState({ message: `The last pressed key is [${event.key}]` })
    ));
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}

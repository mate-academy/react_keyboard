import React from 'react';

type State = {
  message: string
};

export class App extends React.Component<{}, State> {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPres);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPres);
  }

  keyPres = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.message}</p>
      </div>
    );
  }
}

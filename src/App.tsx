import React from 'react';

type State = {
  keyup: string,
};

export class App extends React.Component {
  state: State = {
    keyup: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.listener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.listener);
  }

  listener = (event: KeyboardEvent) => {
    this.setState({ keyup: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { keyup } = this.state;

    return (
      <div className="App">
        <p className="App__message">{keyup}</p>
      </div>
    );
  }
}

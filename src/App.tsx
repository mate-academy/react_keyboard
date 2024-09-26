import React from 'react';

export class App extends React.Component {
  state = {
    info: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.printKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.printKey);
  }

  printKey = (event: KeyboardEvent) => {
    this.setState({ info: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.info}</p>
      </div>
    );
  }
}

import React from 'react';

export class App extends React.Component {
  state = {
    str: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ str: `The last pressed key is ${event.key}` });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.str}</p>
      </div>
    );
  }
}

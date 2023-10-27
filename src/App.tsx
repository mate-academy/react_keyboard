import React from 'react';

export class App extends React.Component {
  state = {
    keys: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlebooton);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlebooton);
  }

  handlebooton = (event: KeyboardEvent) => {
    this.setState({ keys: `The last pressed keys is [${event.key}]` });
  };

  render() {
    const { keys } = this.state;

    return (
      <div className="App">
        <p className="App__message">{keys}</p>
      </div>
    );
  }
}

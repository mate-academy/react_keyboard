import React from 'react';

export class App extends React.Component {
  state = {
    keyUp: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.listener);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.listener);
  }

  listener = (e: KeyboardEvent) => this.setState({ keyUp: `The last pressed key is [${e.key}]` });

  render() {
    const { keyUp } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyUp}
        </p>
      </div>
    );
  }
}

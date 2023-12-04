import React from 'react';

export class App extends React.Component {
  state = {
    lastKeyPressed: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleListener);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleListener);
  }

  handleListener = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({ lastKeyPressed: key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          { this.state.lastKeyPressed.length === 0 ? (
            'Nothing was pressed yet'
          ) : (
            `The last pressed key is [${this.state.lastKeyPressed}]`
          )}
        </p>
      </div>
    );
  }
}

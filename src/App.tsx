import React from 'react';

export class App extends React.Component {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.key}]`}
        </p>
      </div>
    );
  }
};

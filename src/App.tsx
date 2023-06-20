import React from 'react';

export class App extends React.Component {
  state = {
    message: null,
  };

  componentDidMount() {
    this.setState({ message: 'Nothing was pressed yet' });
  }

  componentDidUpdate() {
    document.addEventListener('keyup', (event) => {
      this.setState({ message: `The last pressed key is [${event.key}]` });
    });
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {`${message}`}
        </p>
      </div>
    );
  }
}

import React from 'react';

export class App extends React.Component {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ message: `The last pressed key is [${event.key}]` });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ message: `The last pressed key is [${event.key}]` });
    });
  }

  render(): JSX.Element {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {message}
        </p>
      </div>
    );
  }
}

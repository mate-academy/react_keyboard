import React from 'react';

type State = {
  message: string;
};

export class App extends React.Component<{}, State> {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ message: `The last pressed key is ${event.key}` });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ message: `The last pressed key is ${event.key}` });
    });
  }

  render() {
    return (
      <div className="App">
        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

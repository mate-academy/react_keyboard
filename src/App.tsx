import React from 'react';

type State = {
  key: string | null,
};

export class App extends React.Component<{}, State> {
  state = {
    key: null,
  };

  message = 'Nothing was pressed yet';

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ key: event.key });
    });
  }

  render() {
    const { key } = this.state;

    if (key !== null) {
      this.message = `The last pressed key is [${key}]`;
    }

    return (
      <div className="App">
        <p className="App__message">
          {this.message}
        </p>
      </div>
    );
  }
}

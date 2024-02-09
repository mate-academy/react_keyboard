import React from 'react';

type Props = {
  letter: string;
};

type State = {
  keyHit: string | null;
  message: string;
};

export class App extends React.Component<Props, State> {
  state = {
    keyHit: null,
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.setState({ keyHit: event.key });
      this.setState({ message: `The last pressed key is [${event.key}]` });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (event: KeyboardEvent) => {
      this.setState({ keyHit: event.key });
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          { this.state.keyHit ? this.state.message : 'Nothing was pressed yet' }

        </p>
      </div>
    );
  }
}

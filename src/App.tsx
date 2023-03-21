import React from 'react';

type Props = {};

type State = {
  x: string;
};

export class App extends React.Component<Props, State> {
  state = {
    x: 'key',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ x: event.key });
    });
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {`The last pressed key is [${this.state.x}]`}
        </p>
      </div>
    );
  }
}

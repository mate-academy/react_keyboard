import { Component, ReactNode } from 'react';

type State = {
  msg: string,
};

export class App extends Component<{}, State> {
  state = {
    msg: 'Nothing pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key) {
        this.setState({ msg: `The last pressed key is ${event.key}` });
      }
    });
  }

  componentWillUnmount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key) {
        this.setState({ msg: `The last pressed key is ${event.key}` });
      }
    });
  }

  render(): ReactNode {
    const { msg } = this.state;

    return (
      <div>
        <h1>Checking...</h1>
        <h2>{msg}</h2>
      </div>
    );
  }
}

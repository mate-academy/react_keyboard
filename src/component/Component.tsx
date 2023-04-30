import { Component, ReactNode } from 'react';

export class Key extends Component {
  state = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ message: `The last pressed key is [${event.key}]` });
    });
  }

  render(): ReactNode {
    return (
      <p className="App__message">
        {this.state.message}
      </p>
    );
  }
}

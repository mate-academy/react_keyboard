import { Component } from 'react';

type State = {
  notification: string;
};

export class App extends Component<{}, State> {
  state = {
    notification: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyUp);
  }

  handleDocumentKeyUp = (event: KeyboardEvent) => {
    if (event.key) {
      this.setState({
        notification: `The last pressed key is [${event.key === ' ' ? 'Space' : event.key}]`,
      });
    }
  };

  render() {
    const { notification } = this.state;

    return (
      <div className="title has-text-centered mt-6">
        <p>{notification}</p>
      </div>
    );
  }
}

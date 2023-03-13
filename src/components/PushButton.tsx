import { Component} from 'react';

type State = {
  pushedButton: string;
};

export class PushButton extends Component<{}, State> {
  state = {
    pushedButton: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.KeyboardsListener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.KeyboardsListener);
  }

  KeyboardsListener = (event: KeyboardEvent) => {
    this.setState({ pushedButton: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { pushedButton } = this.state;

    return (
      <p className="App__message">{pushedButton}</p>
    );
  }
}
